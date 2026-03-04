import {
  CommonModule,
  Component,
  Directive,
  Injector,
  Input,
  JsonPipe,
  Output,
  Store,
  TasksActions,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  tasksFeature,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VLCYX5U6.js";

// src/app/components/task-card/task-card.component.ts
function TaskCardComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.task().assignee);
  }
}
function TaskCardComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1, "\u26A0\uFE0F Overdue");
    \u0275\u0275domElementEnd();
  }
}
function TaskCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 5)(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, TaskCardComponent_Conditional_6_Conditional_6_Template, 2, 1, "span", 7);
    \u0275\u0275domElementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, TaskCardComponent_Conditional_6_Conditional_9_Template, 2, 0, "span", 9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.task().description || "No description");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.priorityClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.task().priority, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.task().assignee ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formattedDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isOverdue() ? 9 : -1);
  }
}
var TaskCardComponent = class _TaskCardComponent {
  /**
   * Input signal - receives task data from parent
   */
  task = input.required(...ngDevMode ? [{ debugName: "task" }] : []);
  /**
   * Output signals - emit events to parent
   */
  edit = output();
  delete = output();
  /**
   * Local UI state - managed with signals
   * This is component-level state, not stored in NgRx
   */
  isExpanded = signal(false, ...ngDevMode ? [{ debugName: "isExpanded" }] : []);
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  /**
   * Computed signal - CSS class based on priority
   * Automatically recomputes when task() changes
   */
  priorityClass = computed(() => {
    return `priority-${this.task().priority}`;
  }, ...ngDevMode ? [{ debugName: "priorityClass" }] : []);
  /**
   * Computed signal - formatted date
   * TODO: Implement proper date formatting
   */
  formattedDate = computed(() => {
    const date = this.task().updatedAt;
    return new Date(date).toLocaleDateString();
  }, ...ngDevMode ? [{ debugName: "formattedDate" }] : []);
  /**
   * Computed signal - check if task is overdue
   * TODO: Implement if you add dueDate to Task model
   */
  isOverdue = computed(() => {
    return false;
  }, ...ngDevMode ? [{ debugName: "isOverdue" }] : []);
  /**
   * Toggle expansion state
   */
  toggleExpanded() {
    this.isExpanded.update((expanded) => !expanded);
  }
  /**
   * Emit edit event
   */
  onEdit() {
    this.edit.emit(this.task());
  }
  /**
   * Emit delete event
   */
  onDelete() {
    this.delete.emit(this.task().id);
  }
  static \u0275fac = function TaskCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskCardComponent, selectors: [["app-task-card"]], inputs: { task: [1, "task"] }, outputs: { edit: "edit", delete: "delete" }, decls: 12, vars: 5, consts: [[1, "task-card"], [1, "task-header"], [3, "click"], [1, "task-details"], [1, "task-actions"], [1, "task-meta"], [1, "priority"], [1, "assignee"], [1, "date"], [1, "overdue-badge"]], template: function TaskCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 2);
      \u0275\u0275domListener("click", function TaskCardComponent_Template_button_click_4_listener() {
        return ctx.toggleExpanded();
      });
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(6, TaskCardComponent_Conditional_6_Template, 10, 7, "div", 3);
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 2);
      \u0275\u0275domListener("click", function TaskCardComponent_Template_button_click_8_listener() {
        return ctx.onEdit();
      });
      \u0275\u0275text(9, "Edit");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "button", 2);
      \u0275\u0275domListener("click", function TaskCardComponent_Template_button_click_10_listener() {
        return ctx.onDelete();
      });
      \u0275\u0275text(11, "Delete");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.priorityClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.task().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isExpanded() ? "\u25BC" : "\u25B6", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isExpanded() ? 6 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.task-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n  background: white;\n}\n.task-card.priority-low[_ngcontent-%COMP%] {\n  border-left: 4px solid #4caf50;\n}\n.task-card.priority-medium[_ngcontent-%COMP%] {\n  border-left: 4px solid #ff9800;\n}\n.task-card.priority-high[_ngcontent-%COMP%] {\n  border-left: 4px solid #f44336;\n}\n.task-card.priority-critical[_ngcontent-%COMP%] {\n  border-left: 4px solid #9c27b0;\n}\n.task-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task-details[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #eee;\n}\n.task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 0.875rem;\n}\n.priority[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.priority-low[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.priority-medium[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.priority-high[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.priority-critical[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.overdue-badge[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c62828;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=task-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskCardComponent, [{
    type: Component,
    args: [{ selector: "app-task-card", standalone: true, imports: [CommonModule], template: `
    <div class="task-card" [class]="priorityClass()">
      <div class="task-header">
        <h3>{{ task().title }}</h3>
        <button (click)="toggleExpanded()">
          {{ isExpanded() ? '\u25BC' : '\u25B6' }}
        </button>
      </div>

      @if (isExpanded()) {
        <div class="task-details">
          <p>{{ task().description || 'No description' }}</p>
          <div class="task-meta">
            <span class="priority" [class]="priorityClass()">
              {{ task().priority }}
            </span>
            @if (task().assignee) {
              <span class="assignee">{{ task().assignee }}</span>
            }
            <span class="date">{{ formattedDate() }}</span>
            @if (isOverdue()) {
              <span class="overdue-badge">\u26A0\uFE0F Overdue</span>
            }
          </div>
        </div>
      }

      <div class="task-actions">
        <button (click)="onEdit()">Edit</button>
        <button (click)="onDelete()">Delete</button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;6b558c62deceb6d1f537c360811fd807c77582e42f2376429f14707a96c4cbbe;/Users/adambromby/Desktop/dev/Carno/Carno-Uk/src/app/components/task-card/task-card.component.ts */\n.task-card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n  background: white;\n}\n.task-card.priority-low {\n  border-left: 4px solid #4caf50;\n}\n.task-card.priority-medium {\n  border-left: 4px solid #ff9800;\n}\n.task-card.priority-high {\n  border-left: 4px solid #f44336;\n}\n.task-card.priority-critical {\n  border-left: 4px solid #9c27b0;\n}\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task-details {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #eee;\n}\n.task-meta {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 0.875rem;\n}\n.priority {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.priority-low {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.priority-medium {\n  background: #fff3e0;\n  color: #e65100;\n}\n.priority-high {\n  background: #ffebee;\n  color: #c62828;\n}\n.priority-critical {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.overdue-badge {\n  background: #ffcdd2;\n  color: #c62828;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.task-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\nbutton {\n  padding: 4px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\nbutton:hover {\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=task-card.component.css.map */\n"] }]
  }], null, { task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: true }] }], edit: [{ type: Output, args: ["edit"] }], delete: [{ type: Output, args: ["delete"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskCardComponent, { className: "TaskCardComponent", filePath: "src/app/components/task-card/task-card.component.ts", lineNumber: 122 });
})();

// src/app/components/widgets/task-count-widget.component.ts
function TaskCountWidgetComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().tooltip);
  }
}
var TaskCountWidgetComponent = class _TaskCountWidgetComponent {
  /**
   * Input signal for widget data
   */
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : []);
  /**
   * Computed signal for status CSS class
   */
  statusClass = computed(() => {
    return `status-${this.data().status}`;
  }, ...ngDevMode ? [{ debugName: "statusClass" }] : []);
  static \u0275fac = function TaskCountWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskCountWidgetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskCountWidgetComponent, selectors: [["app-task-count-widget"]], inputs: { data: [1, "data"] }, decls: 9, vars: 6, consts: [[1, "widget", "task-count-widget"], [1, "widget-icon"], [1, "widget-content"], [1, "widget-label"], [1, "widget-value"], [1, "widget-tooltip"]], template: function TaskCountWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(8, TaskCountWidgetComponent_Conditional_8_Template, 2, 1, "div", 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.statusClass());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data().icon || "\u{1F4CA}", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data().label);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data().value);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data().tooltip ? 8 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.widget[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid #ddd;\n  min-width: 200px;\n}\n.widget-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.widget-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.widget-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #666;\n  margin-bottom: 4px;\n}\n.widget-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.widget-tooltip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #999;\n}\n.status-success[_ngcontent-%COMP%] {\n  border-left: 4px solid #4caf50;\n}\n.status-success[_ngcontent-%COMP%]   .widget-value[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.status-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #ff9800;\n}\n.status-warning[_ngcontent-%COMP%]   .widget-value[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.status-error[_ngcontent-%COMP%] {\n  border-left: 4px solid #f44336;\n}\n.status-error[_ngcontent-%COMP%]   .widget-value[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.status-neutral[_ngcontent-%COMP%] {\n  border-left: 4px solid #9e9e9e;\n}\n.status-neutral[_ngcontent-%COMP%]   .widget-value[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n/*# sourceMappingURL=task-count-widget.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskCountWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-task-count-widget", standalone: true, imports: [CommonModule], template: `
    <div class="widget task-count-widget" [class]="statusClass()">
      <div class="widget-icon">
        {{ data().icon || '\u{1F4CA}' }}
      </div>
      <div class="widget-content">
        <div class="widget-label">{{ data().label }}</div>
        <div class="widget-value">{{ data().value }}</div>
      </div>
      @if (data().tooltip) {
        <div class="widget-tooltip">{{ data().tooltip }}</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;c5745fc07ef5ac53912dc336378cf22643bd0e4565e8484c8e4d02f83f6ff9ad;/Users/adambromby/Desktop/dev/Carno/Carno-Uk/src/app/components/widgets/task-count-widget.component.ts */\n.widget {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid #ddd;\n  min-width: 200px;\n}\n.widget-icon {\n  font-size: 2rem;\n}\n.widget-content {\n  flex: 1;\n}\n.widget-label {\n  font-size: 0.875rem;\n  color: #666;\n  margin-bottom: 4px;\n}\n.widget-value {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.widget-tooltip {\n  font-size: 0.75rem;\n  color: #999;\n}\n.status-success {\n  border-left: 4px solid #4caf50;\n}\n.status-success .widget-value {\n  color: #4caf50;\n}\n.status-warning {\n  border-left: 4px solid #ff9800;\n}\n.status-warning .widget-value {\n  color: #ff9800;\n}\n.status-error {\n  border-left: 4px solid #f44336;\n}\n.status-error .widget-value {\n  color: #f44336;\n}\n.status-neutral {\n  border-left: 4px solid #9e9e9e;\n}\n.status-neutral .widget-value {\n  color: #9e9e9e;\n}\n/*# sourceMappingURL=task-count-widget.component.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskCountWidgetComponent, { className: "TaskCountWidgetComponent", filePath: "src/app/components/widgets/task-count-widget.component.ts", lineNumber: 100 });
})();

// src/app/components/widgets/progress-widget.component.ts
function ProgressWidgetComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.percentage(), "%");
  }
}
function ProgressWidgetComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().tooltip);
  }
}
var ProgressWidgetComponent = class _ProgressWidgetComponent {
  /**
   * Input signal for widget data
   */
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : []);
  /**
   * Computed signal for percentage calculation
   */
  percentage = computed(() => {
    const { value, max } = this.data();
    if (max === 0)
      return 0;
    return Math.round(value / max * 100);
  }, ...ngDevMode ? [{ debugName: "percentage" }] : []);
  /**
   * Computed signal for status CSS class
   */
  statusClass = computed(() => {
    return `status-${this.data().status}`;
  }, ...ngDevMode ? [{ debugName: "statusClass" }] : []);
  static \u0275fac = function ProgressWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressWidgetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressWidgetComponent, selectors: [["app-progress-widget"]], inputs: { data: [1, "data"] }, decls: 11, vars: 11, consts: [[1, "widget", "progress-widget"], [1, "widget-header"], [1, "widget-label"], [1, "widget-percentage"], [1, "progress-bar"], [1, "progress-fill"], [1, "widget-footer"], [1, "widget-value"], [1, "widget-tooltip"]], template: function ProgressWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, ProgressWidgetComponent_Conditional_4_Template, 2, 1, "span", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 4);
      \u0275\u0275domElement(6, "div", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(10, ProgressWidgetComponent_Conditional_10_Template, 2, 1, "span", 8);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.statusClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data().label);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data().showPercentage ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.statusClass());
      \u0275\u0275styleProp("width", ctx.percentage(), "%");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.data().value, " / ", ctx.data().max);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data().tooltip ? 10 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.widget[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid #ddd;\n  min-width: 250px;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.widget-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n}\n.widget-percentage[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.widget-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  color: #999;\n}\n.status-success[_ngcontent-%COMP%]   .widget-percentage[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.status-success[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #4caf50;\n}\n.status-warning[_ngcontent-%COMP%]   .widget-percentage[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.status-warning[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #ff9800;\n}\n.status-error[_ngcontent-%COMP%]   .widget-percentage[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.status-error[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.status-neutral[_ngcontent-%COMP%]   .widget-percentage[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.status-neutral[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  background: #9e9e9e;\n}\n/*# sourceMappingURL=progress-widget.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-progress-widget", standalone: true, imports: [CommonModule], template: `
    <div class="widget progress-widget" [class]="statusClass()">
      <div class="widget-header">
        <span class="widget-label">{{ data().label }}</span>
        @if (data().showPercentage) {
          <span class="widget-percentage">{{ percentage() }}%</span>
        }
      </div>
      
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          [class]="statusClass()"
          [style.width.%]="percentage()">
        </div>
      </div>

      <div class="widget-footer">
        <span class="widget-value">{{ data().value }} / {{ data().max }}</span>
        @if (data().tooltip) {
          <span class="widget-tooltip">{{ data().tooltip }}</span>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;fae3734b8984d4bb6a604e799227864054f4d24cf9b0ad3f7b24ef2a36b41055;/Users/adambromby/Desktop/dev/Carno/Carno-Uk/src/app/components/widgets/progress-widget.component.ts */\n.widget {\n  padding: 16px;\n  border-radius: 8px;\n  background: white;\n  border: 1px solid #ddd;\n  min-width: 250px;\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.widget-label {\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n}\n.widget-percentage {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.progress-bar {\n  height: 8px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-fill {\n  height: 100%;\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.widget-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  color: #999;\n}\n.status-success .widget-percentage {\n  color: #4caf50;\n}\n.status-success .progress-fill {\n  background: #4caf50;\n}\n.status-warning .widget-percentage {\n  color: #ff9800;\n}\n.status-warning .progress-fill {\n  background: #ff9800;\n}\n.status-error .widget-percentage {\n  color: #f44336;\n}\n.status-error .progress-fill {\n  background: #f44336;\n}\n.status-neutral .widget-percentage {\n  color: #9e9e9e;\n}\n.status-neutral .progress-fill {\n  background: #9e9e9e;\n}\n/*# sourceMappingURL=progress-widget.component.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressWidgetComponent, { className: "ProgressWidgetComponent", filePath: "src/app/components/widgets/progress-widget.component.ts", lineNumber: 124 });
})();

// src/app/directives/dynamic-widget-outlet.directive.ts
var DynamicWidgetOutletDirective = class _DynamicWidgetOutletDirective {
  viewContainerRef = inject(ViewContainerRef);
  injector = inject(Injector);
  /**
   * Accept single config or array of configs
   */
  dynamicWidgetOutlet;
  /**
   * Store component references for cleanup
   */
  componentRefs = [];
  /**
   * Store subscriptions for cleanup
   */
  subscriptions = [];
  ngOnInit() {
    this.renderComponents();
  }
  ngOnDestroy() {
    this.cleanup();
  }
  /**
   * Render components based on configuration
   */
  renderComponents() {
    this.cleanup();
    this.viewContainerRef.clear();
    const configs = Array.isArray(this.dynamicWidgetOutlet) ? this.dynamicWidgetOutlet : [this.dynamicWidgetOutlet];
    configs.forEach((config) => {
      this.renderComponent(config);
    });
  }
  /**
   * Render a single component
   *
   * Implementation:
   * 1. Create component using ViewContainerRef.createComponent()
   * 2. Set inputs (handle static, Observable, and Signal types)
   * 3. Subscribe to outputs and call handlers
   * 4. Store ComponentRef and Subscriptions for cleanup
   */
  renderComponent(config) {
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
          }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "effectRef" } : {}), { injector: this.injector }));
        } else {
          componentRef.setInput(key, value);
        }
      });
    }
    if (config.outputs) {
      Object.entries(config.outputs).forEach(([key, handler]) => {
        const output2 = componentRef.instance[key];
        if (output2 && typeof output2.subscribe === "function") {
          const sub = output2.subscribe((event) => {
            handler(event);
          });
          this.subscriptions.push(sub);
        }
      });
    }
  }
  /**
   * Type guards for input types
   */
  isObservable(value) {
    return value && typeof value.subscribe === "function";
  }
  isSignal(value) {
    return value && typeof value === "function" && "subscribe" in value;
  }
  /**
   * Cleanup all components and subscriptions
   */
  cleanup() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];
  }
  static \u0275fac = function DynamicWidgetOutletDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicWidgetOutletDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DynamicWidgetOutletDirective, selectors: [["", "dynamicWidgetOutlet", ""]], inputs: { dynamicWidgetOutlet: "dynamicWidgetOutlet" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicWidgetOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[dynamicWidgetOutlet]",
      standalone: true
    }]
  }], null, { dynamicWidgetOutlet: [{
    type: Input
  }] });
})();

// src/app/pages/task-board/task-board.ts
var _forTrack0 = ($index, $item) => $item.id;
function TaskBoard_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading tasks...");
    \u0275\u0275elementEnd()();
  }
}
function TaskBoard_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.error(), " ");
  }
}
function TaskBoard_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TaskBoard_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2, "No tasks");
    \u0275\u0275elementEnd()();
  }
}
function TaskBoard_For_12_For_9_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", col_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.name, " ");
  }
}
function TaskBoard_For_12_For_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TaskBoard_For_12_For_9_For_8_Conditional_0_Template, 2, 2, "option", 20);
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const task_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(col_r4.id !== task_r3.columnId ? 0 : -1);
  }
}
function TaskBoard_For_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-task-card", 16);
    \u0275\u0275listener("edit", function TaskBoard_For_12_For_9_Template_app_task_card_edit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEditTask($event));
    })("delete", function TaskBoard_For_12_For_9_Template_app_task_card_delete_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDeleteTask($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 17)(2, "label");
    \u0275\u0275text(3, "Move to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 18);
    \u0275\u0275listener("change", function TaskBoard_For_12_For_9_Template_select_change_4_listener($event) {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.onMoveTask(task_r3.id, $event.target.value, task_r3.columnId);
      return \u0275\u0275resetView($event.target.value = "");
    });
    \u0275\u0275elementStart(5, "option", 19);
    \u0275\u0275text(6, "Select column...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, TaskBoard_For_12_For_9_For_8_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("task", task_r3);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.columns);
  }
}
function TaskBoard_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 12)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275conditionalCreate(7, TaskBoard_For_12_Conditional_7_Template, 3, 0, "div", 15);
    \u0275\u0275repeaterCreate(8, TaskBoard_For_12_For_9_Template, 9, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(column_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTasksForColumn(column_r5.id).length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getTasksForColumn(column_r5.id).length === 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getTasksForColumn(column_r5.id));
  }
}
var COLUMNS = [
  { id: "todo", name: "To Do", order: 1 },
  { id: "in-progress", name: "In Progress", order: 2 },
  { id: "done", name: "Done", order: 3 }
];
var TaskBoard = class _TaskBoard {
  store = inject(Store);
  // Columns definition
  columns = COLUMNS;
  // Selectors as signals
  allTasks = this.store.selectSignal(tasksFeature.selectTasks);
  loading = this.store.selectSignal(tasksFeature.selectLoading);
  error = this.store.selectSignal(tasksFeature.selectError);
  priorityBreakdown = this.store.selectSignal(tasksFeature.selectPriorityBreakdown);
  completionRate = this.store.selectSignal(tasksFeature.selectCompletionRate);
  // Tasks by column (computed signals)
  todoTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn("todo"));
  inProgressTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn("in-progress"));
  doneTasks = this.store.selectSignal(tasksFeature.selectTasksByColumn("done"));
  // Widget data (computed signals)
  taskCountData = computed(() => {
    const count = this.allTasks().length;
    return {
      value: count,
      status: count > 10 ? "success" : "warning",
      label: "Total Tasks",
      icon: "\u{1F4CB}",
      tooltip: `${count} tasks in the board`
    };
  }, ...ngDevMode ? [{ debugName: "taskCountData" }] : []);
  progressData = computed(() => {
    const rate = this.completionRate();
    const total = this.allTasks().length;
    const completed = Math.round(rate / 100 * total);
    const status = rate >= 75 ? "success" : rate >= 50 ? "warning" : "error";
    return {
      value: completed,
      max: total,
      status,
      label: "Completion Progress",
      showPercentage: true,
      tooltip: `${completed} of ${total} tasks completed`
    };
  }, ...ngDevMode ? [{ debugName: "progressData" }] : []);
  highPriorityData = computed(() => {
    const breakdown = this.priorityBreakdown();
    const highCount = breakdown["high"] + breakdown["critical"];
    const status = highCount > 5 ? "error" : highCount > 2 ? "warning" : "success";
    return {
      value: highCount,
      status,
      label: "High Priority",
      icon: "\u26A0\uFE0F",
      tooltip: `${breakdown["high"]} high + ${breakdown["critical"]} critical priority tasks`
    };
  }, ...ngDevMode ? [{ debugName: "highPriorityData" }] : []);
  // Widget configurations using DynamicWidgetOutletDirective
  // Pass the signals themselves (not evaluated values) so the directive can watch for changes
  widgetConfigs = [
    {
      component: TaskCountWidgetComponent,
      inputs: {
        data: this.taskCountData
        // Signal (not evaluated)
      }
    },
    {
      component: ProgressWidgetComponent,
      inputs: {
        data: this.progressData
        // Signal (not evaluated)
      }
    },
    {
      component: TaskCountWidgetComponent,
      inputs: {
        data: this.highPriorityData
        // Signal (not evaluated)
      }
    }
  ];
  ngOnInit() {
    this.store.dispatch(TasksActions.load_Tasks({ boardId: "default-board" }));
  }
  // Get tasks for a specific column
  getTasksForColumn(columnId) {
    return this.allTasks().filter((task) => task.columnId === columnId);
  }
  // Event handlers
  onEditTask(task) {
    console.log("Edit task:", task);
  }
  onDeleteTask(taskId) {
    console.log("Delete task:", taskId);
    this.store.dispatch(TasksActions.delete_Task({ taskId }));
  }
  onAddTask() {
    console.log("Add new task");
  }
  onMoveTask(taskId, toColumnId, fromColumnId) {
    this.store.dispatch(TasksActions.move_Task({
      move: { taskId, toColumnId, fromColumnId }
    }));
  }
  static \u0275fac = function TaskBoard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskBoard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskBoard, selectors: [["app-task-board"]], decls: 30, vars: 11, consts: [[1, "task-board-container"], [1, "board-header"], [1, "btn-primary", 3, "click"], [1, "loading-state"], [1, "error-banner"], [1, "widget-dashboard"], [4, "dynamicWidgetOutlet"], [1, "board-columns"], [1, "column"], [1, "debug-info"], ["open", ""], [1, "spinner"], [1, "column-header"], [1, "task-count"], [1, "column-content"], [1, "empty-column"], [3, "edit", "delete", "task"], [1, "task-actions"], [1, "column-selector", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value"]], template: function TaskBoard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "Task Board");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function TaskBoard_Template_button_click_4_listener() {
        return ctx.onAddTask();
      });
      \u0275\u0275text(5, " \u2795 Add Task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, TaskBoard_Conditional_6_Template, 4, 0, "div", 3);
      \u0275\u0275conditionalCreate(7, TaskBoard_Conditional_7_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(8, "section", 5);
      \u0275\u0275template(9, TaskBoard_ng_container_9_Template, 1, 0, "ng-container", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "section", 7);
      \u0275\u0275repeaterCreate(11, TaskBoard_For_12_Template, 10, 3, "div", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "section", 9)(14, "details", 10)(15, "summary");
      \u0275\u0275text(16, "Priority Breakdown (Debug)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "pre");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "json");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("dynamicWidgetOutlet", ctx.widgetConfigs);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.columns);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 9, ctx.priorityBreakdown()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Completion Rate: ", ctx.completionRate(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Total Tasks: ", ctx.allTasks().length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("High Priority Count: ", ctx.priorityBreakdown()["high"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Critical Priority Count: ", ctx.priorityBreakdown()["critical"]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("High Priority Widget Value: ", ctx.highPriorityData().value);
    }
  }, dependencies: [
    CommonModule,
    TaskCardComponent,
    DynamicWidgetOutletDirective,
    JsonPipe
  ], styles: ["\n\n.task-board-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.board-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #e1e8ed;\n}\n.board-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e1e8ed;\n  border-top-color: #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #7f8c8d;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fee;\n  color: #c0392b;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  border-left: 4px solid #e74c3c;\n}\n.widget-dashboard[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.board-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.column[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.column-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 2px solid #e1e8ed;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.column-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.column-header[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.column-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.empty-column[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #95a5a6;\n  font-style: italic;\n}\n.task-actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.task-actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #7f8c8d;\n  font-weight: 500;\n}\n.task-actions[_ngcontent-%COMP%]   .column-selector[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n.task-actions[_ngcontent-%COMP%]   .column-selector[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.debug-info[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e1e8ed;\n}\n.debug-info[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.debug-info[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  padding: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-info[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover {\n  background: #e1e8ed;\n  border-radius: 4px;\n}\n.debug-info[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px;\n  border-radius: 4px;\n  margin-top: 12px;\n  overflow-x: auto;\n  font-size: 0.85rem;\n  border: 1px solid #e1e8ed;\n}\n.debug-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #7f8c8d;\n}\n@media (max-width: 768px) {\n  .board-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .widget-dashboard[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .board-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=task-board.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskBoard, [{
    type: Component,
    args: [{ selector: "app-task-board", standalone: true, imports: [
      CommonModule,
      TaskCardComponent,
      DynamicWidgetOutletDirective
    ], template: `<div class="task-board-container">
  <!-- Header -->
  <header class="board-header">
    <h1>Task Board</h1>
    <button class="btn-primary" (click)="onAddTask()">
      \u2795 Add Task
    </button>
  </header>

  <!-- Loading State -->
  @if (loading()) {
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Loading tasks...</p>
    </div>
  }

  <!-- Error State -->
  @if (error()) {
    <div class="error-banner">
      \u26A0\uFE0F {{ error() }}
    </div>
  }

  <!-- Widget Dashboard - Using DynamicWidgetOutletDirective -->
  <section class="widget-dashboard">
    <ng-container *dynamicWidgetOutlet="widgetConfigs"></ng-container>
  </section>

  <!-- Task Board Columns -->
  <section class="board-columns">
    @for (column of columns; track column.id) {
      <div class="column">
        <div class="column-header">
          <h2>{{ column.name }}</h2>
          <span class="task-count">{{ getTasksForColumn(column.id).length }}</span>
        </div>

        <div class="column-content">
          @if (getTasksForColumn(column.id).length === 0) {
            <div class="empty-column">
              <p>No tasks</p>
            </div>
          }

          @for (task of getTasksForColumn(column.id); track task.id) {
            <app-task-card
              [task]="task"
              (edit)="onEditTask($event)"
              (delete)="onDeleteTask($event)"
            />
            
            <!-- Column Selector for Moving Tasks -->
            <div class="task-actions">
              <label>Move to:</label>
              <select 
                (change)="onMoveTask(task.id, $any($event.target).value, task.columnId); $any($event.target).value = ''"
                class="column-selector"
              >
                <option value="" disabled selected>Select column...</option>
                @for (col of columns; track col.id) {
                  @if (col.id !== task.columnId) {
                    <option [value]="col.id">
                      {{ col.name }}
                    </option>
                  }
                }
              </select>
            </div>
          }
        </div>
      </div>
    }
  </section>

  <!-- Priority Breakdown (Debug Info) -->
  <section class="debug-info">
    <details open>
      <summary>Priority Breakdown (Debug)</summary>
      <pre>{{ priorityBreakdown() | json }}</pre>
      <p>Completion Rate: {{ completionRate() }}%</p>
      <p>Total Tasks: {{ allTasks().length }}</p>
      <p>High Priority Count: {{ priorityBreakdown()['high'] }}</p>
      <p>Critical Priority Count: {{ priorityBreakdown()['critical'] }}</p>
      <p>High Priority Widget Value: {{ highPriorityData().value }}</p>
    </details>
  </section>
</div>
`, styles: ["/* src/app/pages/task-board/task-board.scss */\n.task-board-container {\n  padding: 20px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.board-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #e1e8ed;\n}\n.board-header h1 {\n  font-size: 2rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e1e8ed;\n  border-top-color: #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.loading-state p {\n  margin-top: 16px;\n  color: #7f8c8d;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-banner {\n  background: #fee;\n  color: #c0392b;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  border-left: 4px solid #e74c3c;\n}\n.widget-dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.board-columns {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.column {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.column-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 2px solid #e1e8ed;\n  background: #f8f9fa;\n  border-radius: 8px 8px 0 0;\n}\n.column-header h2 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.column-header .task-count {\n  background: #3498db;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.column-content {\n  padding: 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.empty-column {\n  text-align: center;\n  padding: 40px 20px;\n  color: #95a5a6;\n  font-style: italic;\n}\n.task-actions {\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.task-actions label {\n  font-size: 0.85rem;\n  color: #7f8c8d;\n  font-weight: 500;\n}\n.task-actions .column-selector {\n  flex: 1;\n  padding: 6px 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n.task-actions .column-selector:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.debug-info {\n  margin-top: 30px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e1e8ed;\n}\n.debug-info details {\n  cursor: pointer;\n}\n.debug-info summary {\n  font-weight: 600;\n  color: #2c3e50;\n  padding: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.debug-info summary:hover {\n  background: #e1e8ed;\n  border-radius: 4px;\n}\n.debug-info pre {\n  background: white;\n  padding: 12px;\n  border-radius: 4px;\n  margin-top: 12px;\n  overflow-x: auto;\n  font-size: 0.85rem;\n  border: 1px solid #e1e8ed;\n}\n.debug-info p {\n  margin-top: 8px;\n  color: #7f8c8d;\n}\n@media (max-width: 768px) {\n  .board-columns {\n    grid-template-columns: 1fr;\n  }\n  .widget-dashboard {\n    grid-template-columns: 1fr;\n  }\n  .board-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=task-board.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskBoard, { className: "TaskBoard", filePath: "src/app/pages/task-board/task-board.ts", lineNumber: 30 });
})();
export {
  TaskBoard
};
//# sourceMappingURL=chunk-AWYD4U6R.js.map
