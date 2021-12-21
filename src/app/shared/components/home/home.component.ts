import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ImyServices } from '../../interfaces/myservices.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, ImyServices {
  windowScrolled: boolean = false;
  srcImageTaxes: string = '';
  headingTaxes: string = '';
  descriptionTaxes: string = '';
  
  serviceData!: ImyServices;
  serviceDatas!: Array<ImyServices>;
  aLinkTaxes!: string;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  srcImage: string='';
  heading: string='';
  description: string='';
  aLink: string='';

  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  ngOnInit(): void {
    //this.serviceDatas=new Array<ImyServices>(); 
        
    // this.serviceData.srcImage = '../../../../assets/img/auditing.png';    
    // this.serviceData.heading = 'Auditing Service';    
    // this.serviceData.description = 'The Auditor General of Pakistan (AGP) has deemed it essential to establish a Code of Ethics for auditors in the public sector. ';
    // this.serviceData.aLink = 'https://agp.gov.pk/SiteImage/Misc/files/Code%20Of%20Ethics%20and%20Auditing%20Standards.pdf';
    
    // this.serviceDatas.push(this.serviceData);
  }
}
