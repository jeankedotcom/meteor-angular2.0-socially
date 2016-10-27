import { Component } from "@angular/core";
import { PaginationService } from "ng2-pagination";
import { PartiesList } from "../shared-components/parties-list.class";
import * as template from "./parties-list.component.html";
import * as style from "./parties-list.component.scss";

@Component({
    selector: 'parties-list',
    template: template.default,
    styles: [style.default]
})
export class PartiesListComponent extends PartiesList {
    constructor(paginationService: PaginationService) {
        super(paginationService);
    }
}
