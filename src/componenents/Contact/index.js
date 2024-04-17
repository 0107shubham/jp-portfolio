import React from "react";
import { useTheme } from "../../Context";

const Contact = () => {
  const { darkMode } = useTheme();
  return (
    <div class="py-6 px-3 sm:px-6">
      <div class="mb-8 ">
        <h4
          style={{
            backgroundColor: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white",
          }}
          class="text-typo-primary mb-3 text-lg font-medium"
        >
          Contact Details
        </h4>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="flex flex-row">
          <div class="mr-2 h-8 w-8 flex-shrink-0">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgBtVdJaBRBFH2/jVsScYzLKEoyIq6oCIoiKiguCG4g6MGF4EFEEFHEgwrS4waCehAED4oLLqgXRcQNccc1IBoZkCBJNFFRXDGJmUyVr3rijLNlOjOdB01VV/+u/+vVq/pVApc4ZmtfJ8FyaEzi62SWAyHobr4J0KQFIba9YXm1k8KtFUF576ZfyWZwaoeeohS2sTqbTwHc43gECK6ypRq5BOCMmB2wuh55QGnsLxFsX2hLA9wGcMLWw/jhOqsBeINqsjEjHRtWcgNHPo7FEw+dGwTI5j32PSL5QwIDZ20daAGea6A3OgDst04BU/9nIsbAmd3aHwZud5RzA452IJm4fnSv7vGvLabqljB2Ion2uesUCnsmdvLyhqDqWdbF0xaGdW7EFpZbzYvDgKGexepky2TnBiWDkDfI8uZjUZ/RAJoBO52hiqS2FZdo5AvyV2AJNjgBmEjYUJ7OsPFXaluRD55ANMrNXmNRFNMzGX2tS53rzt2APmX5s0D4SP8si3v3/EwW3+rTt5eOhicQwXSLVAzJZFD7Kr3aff09YYAiwyQjwlGZvjc3Ap9r4u+aft9WCB6dt+AJBH7TU5e2bEL34yyQMtRWphdnjvBnHcqXGklgYeIi7QjRI4gJ4Hc2q4rLFsJN0Xohl+HExcphwwN8sjiv9dmsGn4Ar+/EPfoHM6MsU+haFA9q3kaF8QsU+g2G6+AoqaoCGj9kfWg2YyM+43DktOgK6BswCV7hwRkLI6YymEKgbKx5lCPWH5+A8B/uJe8lIfgkVJp94DFcInRPEkRpcsWctQqlYxLtDAO+/gyyDBg+JfOS5fzftHhkOsd6A9oRxItrEtNEHvg8cgCuWjwcfOfLxfb8aabj1hEL7yrzUuKVCWsk7CxDZr094mjCPYwwn10S3D1poS7U7kB0JHrgjR/JTgb1PoawCTnC6KFPqUa/ADMmU3ZRLzjC/MI95P7pxO2GIw2W22InBNB68XiONnKDF+AKqSoPSmzVxUIzWohozGLV1Y0mJ+c8nitxLjhICaA1iGoazWSGrIHHcJynuRuk5ALOzZsW5mnzA7xyLqhQGS4mGeV729YFtRSLtJ5ec8RPrXCgewi7ll6QSDqDrOvHnBlJk03DJXwthAuQve+0PyzNOLhyj3xoy9b1Aj5k6+JiXhX4www6GM1yCEs/ywg181FbqGf5lD3ebNF42LrBZcVfLCkmMWE1wYYAAAAASUVORK5CYII=" />
          </div>

          <div class="w-full overflow-hidden">
            <h6
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              class="text-typo-primary text-base font-medium leading-5"
            >
              9876543210
            </h6>
            <div
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              class="text-typo-secondary text-xs"
            >
              Phone
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mr-2 h-8 w-8 flex-shrink-0">
            <img src="data:image/png;base64,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" />
          </div>

          <div class="w-full overflow-hidden">
            <h6
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              class="text-typo-primary text-base font-medium leading-5"
            >
              student@mail.com
            </h6>
            <div
              style={{
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white",
              }}
              class="text-typo-secondary text-xs"
            >
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
