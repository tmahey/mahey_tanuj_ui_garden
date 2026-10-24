export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options?: DropdownOption[];
  disabled?: boolean;
  backgroundColor?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
}
