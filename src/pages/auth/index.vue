<route lang="yaml">
meta:
  layout: auth
</route>
<template>
  <div class="h-full min-h-screen flex justify-content-center align-items-center">
    <Card class="w-10 max-w-lg">
      <template #content>
        <div class="text-900 text-3xl font-medium mb-3 text-center">
          Please authenticate
        </div>
        <TabView class="centered">
          <TabPanel header="Login">
            <form class="flex flex-column">
              <div class="field h-full">
                <label>Email</label>
                <span class="p-input-icon-left w-full">
                  <i class="fa-regular fa-at"></i>
                  <InputText class="w-full" type="text" />
                </span>
                <!-- <app-field-errors
              
                fieldName="Email"
              ></app-field-errors> -->
              </div>
              <div class="field h-full">
                <label>Password</label>
                <span class="p-input-icon-left w-full">
                  <i class="fa-regular fa-key"></i>
                  <InputText
                    class="w-full"
                    type="password"
                    inputClass="w-full"
                    :feedback="false"
                  />
                </span>
                <!-- <app-field-errors
                [formField]="loginForm.controls['password']"
                fieldName="Password"
              ></app-field-errors> -->
              </div>
              <div>
                <!-- <app-field-error
                *ngIf="invalidLoginCredentials"
                class="text-base flex justify-content-center mb-3"
              >
                Invalid credentials
              </app-field-error> -->
              </div>
              <Button
                type="submit"
                label="Sign In"
                icon="fa-regular fa-user-unlock"
              ></Button>
              <Divider align="center" class="m-3">
                <span>or sign in with...</span>
              </Divider>
              <div class="flex justify-content-evenly">
                <Button
                  type="button"
                  style="background-color: #dd4b39"
                  icon="fa-brands fa-google"
                ></Button>
                <Button
                  type="button"
                  style="background-color: #1877f2"
                  icon="fa-brands fa-facebook"
                ></Button>
                <Button
                  type="button"
                  style="background-color: #333"
                  icon="fa-brands fa-github"
                ></Button>
              </div>
            </form>
          </TabPanel>
          <TabPanel header="Register">
            <form class="flex flex-column">
              <div class="field h-full">
                <label>Email</label>
                <span class="p-input-icon-left w-full">
                  <i class="fa-regular fa-at"></i>
                  <InputText class="w-full" type="text" />
                </span>
                <!-- <app-field-errors
                [formField]="registerForm.controls['email']"
                fieldName="Email"
              ></app-field-errors> -->
              </div>
              <div class="field h-full">
                <label>Password</label>
                <span class="p-input-icon-left w-full">
                  <i class="fa-regular fa-key"></i>
                  <Password class="w-full" type="password" autocomplete="new-password" />
                </span>
                <!-- <app-field-errors
                [formField]="registerForm.controls['password']"
                fieldName="Password"
              ></app-field-errors> -->
              </div>
              <div>
                <!-- <app-field-error
                *ngIf="invalidRegisterCredentials"
                class="text-base flex justify-content-center mb-3"
              >
                Invalid credentials
              </app-field-error> -->
              </div>
              <Button
                type="submit"
                label="Register"
                icon="fa-regular fa-user-unlock"
              ></Button>
              <Divider align="center" class="m-3">
                <span>or register in with...</span>
              </Divider>
              <div class="flex justify-content-evenly">
                <Button
                  type="button"
                  style="background-color: #dd4b39"
                  icon="fa-brands fa-google"
                ></Button>
                <Button
                  type="button"
                  style="background-color: #1877f2"
                  icon="fa-brands fa-facebook"
                ></Button>
                <Button
                  type="button"
                  style="background-color: #333"
                  icon="fa-brands fa-github"
                ></Button>
              </div>
            </form>
          </TabPanel>
        </TabView>
      </template>
    </Card>
  </div>
</template>
<style>
div.p-tabview.centered .p-tabview-nav {
  justify-content: center;
}
</style>
