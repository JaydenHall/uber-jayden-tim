import { Component } from "@angular/core";

@Component({
    selector: 'header',
    styleUrls: ['header.scss'],
    template: `
    <div class="header-container">
        <nav class="navbar-light">

        <!-- Navbar brand -->
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->

        <!-- Collapse button -->
        <button class="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent15">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
            </li>
        </ul>
        <!-- Links -->

        </div>
        <!-- Collapsible content -->

        </nav>
    </div>
    `
})

export class HeaderComponent {}