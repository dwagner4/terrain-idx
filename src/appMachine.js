import { createMachine, createActor, assign, setup } from 'xstate';


const appMachine = setup(
  {
    actions: {
      menuAction: assign({
        message: ({ context, event }) => event.data.message,
        color: ({ context, event }) => event.data.color,
      }),
      log: ({ context, event }) => console.log(context),
    },
    actors: {},
    guards: {},
    delays: {},
  }
).createMachine({
  "id": "appMachine",
  "context": {
    "message": "click a menu item to change me",
    "count": 0,
    "color": "black",
    elements: [],
    elementObj: {}
  },
  "initial": "home",
  "states": {
    "home": {
      "on": {
        "menu.loading": {
          "target": "loading"
        }
      }
    },
    "loading": {
      
    }
  },
  "on": {
    "MENU_ITEM": {  
      actions: [ "menuAction", "log"]
    },
  }
}
// 
)

export const AppActor = createActor(appMachine, {
  systemId: 'root-dean',
})

AppActor.start()