declare var document: any;

export enum EPlaycanvasEvents {
  IFrameReady = "IFrameReady",
  ParseData = "ParseData",
  StartGame = "StartGame",
}

class Playcanvas {
  private iframeContent: any;
  private iframeReady: boolean;
  private messagesQueue: any[];

  constructor() {
    this.iframeReady = false;
    this.messagesQueue = [];
  }

  connectToIframe() {
    // @ts-ignore
    this.iframeContent = document.getElementById("game-iframe").contentWindow;

    // --- postMessage event handlers
    window.addEventListener("message", this.parseMessage.bind(this));
  }

  parseMessage(event: any) {
    if (!event.data || !event.data.type) return;

    switch (event.data.type) {
      case EPlaycanvasEvents.IFrameReady:
        this.iframeReady = true;

        // --- send queue messages
        this.messagesQueue.forEach((message) => {
          this.sendMessage(message.type, message.data);
        });
        break;
      case EPlaycanvasEvents.StartGame:
        break;
    }
  }

  sendMessage(type: EPlaycanvasEvents, data?: any) {
    // --- if we aren't ready, queue messages for sending later
    if (this.iframeReady === false) {
      this.messagesQueue.push({
        type: type,
        data: data,
      });
      return;
    }

    this.iframeContent.postMessage(
      {
        type: type,
        data: data,
      },
      "*"
    );
  }
}

export default Playcanvas;
