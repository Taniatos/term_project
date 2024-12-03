declare module "*.png" {
  const value: string;
  // No export assignment, just declare the value type
  const imagePath: string;
  export default imagePath;
}