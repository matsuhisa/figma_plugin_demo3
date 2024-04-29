
if (figma.editorType === 'figma') {
  figma.showUI(__html__);

  figma.ui.onmessage =  (msg: {type: string, count: number}) => {

    if (msg.type === 'create-shapes') {
      const frame = figma.createFrame()
      frame.x = 200
      frame.y = 200
      frame.name = "テストフレーム"
      frame.layoutMode = 'HORIZONTAL'
      frame.itemSpacing = 20

      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];

        frame.appendChild(rect);
      }
    }

    figma.closePlugin();
  };
}

