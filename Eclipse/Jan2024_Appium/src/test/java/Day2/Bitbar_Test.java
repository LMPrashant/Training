package Day2;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;

public class Bitbar_Test {

	public static void main(String[] args) throws MalformedURLException {
		// TODO Auto-generated method stub

		DesiredCapabilities dc = new DesiredCapabilities();
		dc.setCapability("platformName", "Android");
		dc.setCapability("deviceName", "Medium Phone API 32");
		dc.setCapability("skipServerInstallation", "true");
		dc.setCapability("noReset", "true");
		dc.setCapability("platformVersion", "12.0");
		dc.setCapability("app", "D:\\Training\\Appium\\apkfiles\\bitbar-sample-app.apk");
		URL url = new URL("http://127.0.0.1:4723/wd/hub");
		
		AndroidDriver driver = new AndroidDriver(url, dc);

	}

}
