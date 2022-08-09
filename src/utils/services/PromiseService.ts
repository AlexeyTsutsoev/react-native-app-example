/**
 * Service for using Promise
 */
class PromiseService {
  /**
   * You can use it for stop thread
   * @param ms number
   * @returns Promise<void>
   */
  static sleep(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(null), ms));
  }
}

export default PromiseService;
