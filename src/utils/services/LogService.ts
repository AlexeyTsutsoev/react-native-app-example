/**
 * Service for logs error
 */
export default class LogService {
  /**
   * Func for logs errors
   * @param text string
   * @param error any error
   */
  static logError(text: string, error: any) {
    console.log(text, error);
    // add analalitics if need it...
  }
}
