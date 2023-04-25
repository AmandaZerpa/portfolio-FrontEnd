import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
// import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "");
  isLogged = false;
  // miPortfolio:any;
  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService
    /*private datosPortfolio:PortfolioService*/) { }

  ngOnInit(): void
  {
    this.personaService.getPersona().subscribe(data => { this.persona = data })
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    // this.datosPortfolio.obtenerDatos().subscribe(data =>{
    //   console.log(data)
    //   this.miPortfolio = data;
    // });
  }

  onLogOut(): void
  {
    this.tokenService.logOut();
    window.location.reload();
  }

  login()
  {
    this.router.navigate(['/login'])
  }


}
