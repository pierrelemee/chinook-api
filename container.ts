import 'reflect-metadata'
import {Container} from "inversify";
import 'services'
import {buildProviderModule} from 'inversify-binding-decorators'

const container = new Container();

container.load(buildProviderModule());
console.log('Service db')
console.log(container.get('db'))


export {container}
