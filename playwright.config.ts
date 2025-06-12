import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

import config from './src/App/config'

dotenv.config()
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 35000, // 35 seconds
  

  testDir: '.frontend/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 2,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: process.env.CI ? 'dot' : 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    viewport: { width: 1280, height: 720 }, // standard viewport for Swift's laptop
headless: false, // Run in headed mode
    launchOptions: {
      args: ['--start-maximized'],
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: config.playWright.baseUrl,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] }
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }
    }
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
