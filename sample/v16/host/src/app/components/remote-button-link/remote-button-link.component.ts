import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-remote-button-link',
  templateUrl: './remote-button-link.component.html',
  styleUrls: ['./remote-button-link.component.scss']
})
export class RemoteButtonLinkComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef
  @Input() name = ''
  @Input() url = ''
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ){}
  async ngOnInit(){
    
    //eg: with ComponentFactoryResolver which is deprecated
    const {ButtonLinkComponent} = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './RemoteButtonLinkComponent',
    });

    const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ButtonLinkComponent)
    );

    componentRef.instance.name = this.name
    componentRef.instance.url = this.url

    //eg: just create the component without the need of ComponentFactoryResolver
    const viewContainerRef = this.viewContainerRef.createComponent(ButtonLinkComponent)
    viewContainerRef.setInput('name', this.name)
    viewContainerRef.setInput('url', this.url)

  }
}
