export default class TailwindHelper {
  public static classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
  }
}
