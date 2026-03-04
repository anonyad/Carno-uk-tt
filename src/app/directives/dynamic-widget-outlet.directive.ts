import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentRef,
  OnInit,
  OnDestroy,
  Type,
  inject,
  Signal,
  effect,
  Injector,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface WidgetConfig<T = any> {
  component: Type<T>;
  inputs?: {
    [key: string]: any | Observable<any> | Signal<any>;
  };
  outputs?: {
    [key: string]: (event: any) => void;
  };
}

@Directive({
  selector: '[dynamicWidgetOutlet]',
  standalone: true,
})
export class DynamicWidgetOutletDirective implements OnInit, OnDestroy {
  private viewContainerRef = inject(ViewContainerRef);
  private injector = inject(Injector);

  @Input() dynamicWidgetOutlet!: WidgetConfig | WidgetConfig[];

  private componentRefs: ComponentRef<any>[] = [];
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.renderComponents();
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private renderComponents() {
    this.cleanup();
    this.viewContainerRef.clear();

    const configs = Array.isArray(this.dynamicWidgetOutlet)
      ? this.dynamicWidgetOutlet
      : [this.dynamicWidgetOutlet];

    configs.forEach((config) => {
      this.renderComponent(config);
    });
  }

  private renderComponent(config: WidgetConfig) {
    const componentRef = this.viewContainerRef.createComponent(config.component, {
      injector: this.injector
    });

    this.componentRefs.push(componentRef);

    if (config.inputs) {
      Object.entries(config.inputs).forEach(([key, value]) => {
        if (this.isObservable(value)) {
          const sub = value.subscribe((val) => {
            componentRef.setInput(key, val);
          });
          this.subscriptions.push(sub);
        } else if (this.isSignal(value)) {
          const effectRef = effect(() => {
            const signalValue = value();
            componentRef.setInput(key, signalValue);
          }, { injector: this.injector });

        } else {
          componentRef.setInput(key, value);
        }
      });
    }

    if (config.outputs) {
      Object.entries(config.outputs).forEach(([key, handler]) => {
        const output = componentRef.instance[key];

        if (output && typeof output.subscribe === 'function') {
          const sub = output.subscribe((event: any) => {
            handler(event);
          });
          this.subscriptions.push(sub);
        }
      });
    }
  }

  private isObservable(value: any): value is Observable<any> {
    return value && typeof value.subscribe === 'function' && typeof value !== 'function';
  }

  private isSignal(value: any): value is Signal<any> {
    return value && typeof value === 'function' && typeof value.subscribe !== 'function';
  }

  private cleanup() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];

    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];
  }
}
