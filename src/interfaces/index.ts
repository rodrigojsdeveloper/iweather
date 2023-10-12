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

export interface ISubTitle {
  title: string;
}

export interface INextDay {
  day: string;
  src: string;
  max_temp: string;
  min_temp: string;
}
