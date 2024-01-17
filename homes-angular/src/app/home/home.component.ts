import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import { radixCube, radixGithubLogo } from '@ng-icons/radix-icons';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { hlmH3, hlmMuted } from '@spartan-ng/ui-typography-helm';
import { bootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
    HlmButtonDirective,
    HlmAlertDirective,
    HlmAlertIconDirective,
    HlmIconComponent,
    HlmAlertTitleDirective,
    HlmAlertDescriptionDirective,
    HlmLabelDirective,
    HlmInputDirective,
  ],
  providers: [provideIcons({ radixCube, radixGithubLogo, bootstrapGoogle })],
  template: `
    <section hlmCard class="shadow">
      <div hlmCardHeader>
        <h1 hlmCardTitle class="${hlmH3}">Login into Account</h1>
        <p class="${hlmMuted}">
          Login into your existing account or register a new one
        </p>
      </div>

      <div hlmCardContent>
        <div class="login-oauth2-options flex justify-center space-x-4">
          <button hlmBtn variant="outline" class="w-1/2 shadow">
            <hlm-icon name="radixGithubLogo" class="w-5 h-5 mr-2"></hlm-icon>
            GitHub
          </button>
          <button hlmBtn variant="outline" class="w-1/2 shadow">
            <hlm-icon name="bootstrapGoogle" class="w-5 h-5 mr-2"></hlm-icon>
            Google
          </button>
        </div>

        <div class="or-login-with-email flex items-center py-4">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="mx-4 text-gray-300 text-sm">CONTINUE WITH EMAIL</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <div class="login-with-email-form">
          <form class="flex flex-col space-y-4">
            <input hlmInput type="email" placeholder="Email" class="w-full" />
            <input
              hlmInput
              type="password"
              placeholder="Password"
              class="w-full"
            />
            <button hlmBtn class="shadow">Login</button>
            <div
              class="flex w-full flex-col space-y-2 items-center text-sm justify-center space-x-2"
            >
              <a class="${hlmMuted}" href="#">Don't have an account?</a>
              <a class="${hlmMuted}" href="#">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
