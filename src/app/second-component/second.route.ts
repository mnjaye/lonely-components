import { SecondComponentComponent } from "./second-component.component";
import { TestComponent } from "./test/test.component";

export const routesTest = [
  {
    path:'' , component : SecondComponentComponent,
    children : [
      {
        path: 'test' , component : TestComponent
      }
    ]
  }
]
