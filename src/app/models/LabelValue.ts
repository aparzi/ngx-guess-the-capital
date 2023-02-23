export class LabelValue<T> {

  private label: string;
  private value: T;

  constructor(label: string, value: T) {
    this.label = label;
    this.value = value;
  }

}
