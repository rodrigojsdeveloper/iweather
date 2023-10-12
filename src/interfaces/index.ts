export interface InputProps {
  isLoading: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  maxWidth?: "max-w-448";
}

export interface IWeatherItem {
  icon: any;
  title: string;
  value: string;
}
