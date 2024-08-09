// jquery-background-video.d.ts
declare module "jquery-background-video" {
  interface BackgroundVideoOptions {
    videoSource?: "mp4" | "webm";
    videoUrl?: string;
  }

  interface JQuery {
    backgroundVideo(options?: BackgroundVideoOptions): JQuery;
    backgroundVideo(action: "changeSource", videoUrl: string): JQuery;
    // Define other methods or actions if applicable
  }
}
