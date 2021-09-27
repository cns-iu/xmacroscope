import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterComponent {
  @HostBinding('class') readonly clsName = 'app-page-footer';

  @Output() readonly contactClick = new EventEmitter<void>();
  @Output() readonly privacyClick = new EventEmitter<void>();
}
