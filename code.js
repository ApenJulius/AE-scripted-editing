const ae = require("after-effects");
const index = require("./index")
const data = require("./data.json");

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

console.log(data.names)

data.names.forEach(e => {
    console.log(e)
    sleep(10000)
    ae.execute((e_from_node) => {

        var comp = app.project.activeItem;
        var layer = comp.layer(2)
        console.log(comp, layer)

        
        var textDocument = new TextDocument(`Have a wonderful day, ${e_from_node}!`)
        layer.property("Source Text").setValue(textDocument)
        var item = app.project.renderQueue.items.add(comp)
        var outputModule = item.outputModule(1)

        
        outputModule.applyTemplate("mp4")
        outputModule.file = File("./" + e_from_node)

        app.project.renderQueue.render()
        return app.project.activeItem.name;
      }, e)
      .catch(err => console.log('No Active Item', err));
      
      sleep(10000)
})
