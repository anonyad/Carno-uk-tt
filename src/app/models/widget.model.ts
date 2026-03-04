
export type WidgetStatusType = 'success' | 'warning' | 'error' | 'neutral';


export interface WidgetStatus<T = any> {
  value: T;
  status: WidgetStatusType;
  icon?: string;
  tooltip?: string;
  label?: string;
}


export interface TaskCountWidgetData extends WidgetStatus<number> {
  label: string;
}

export interface ProgressWidgetData extends WidgetStatus<number> {
  label: string;
  max: number;
  showPercentage?: boolean;
}

