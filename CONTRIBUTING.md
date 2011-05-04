This framework is very much in flux at the moment.  If you are a VSA employee, please email @jeremyckahn at jkahn@vsapartners.com to get contributor access.

If you need to make a change or addition to the framework, please thoroughly document your changes in your Git commit message.  If you are unsure if your changes will create bugs elsewhere in the framework, the best thing to do is make a Git branch and make your changes there.  When you are done, have another team member who is familiar with the framework (such as @jeremyckahn or @xak) review your changes before merging it back into the `master` branch.  If you have any questions, please contact Jeremy.

Bribery is always welcomed.

Versioning
---

__Important!  Read this!__

We are using Semantic Versioning for this framework.  Read this if you don't know what Semantic Versioning is: http://semver.org/

The important takeaways from Semantic Versioning:

  * Versioning is in this format: `major.minor.patch`
  * If you make a bug fix, increment the `patch` number.
  * If you add a new feature, increment the `minor` number.
  * If you make a change that causes the framework to be backwards-incompatible... talk to @jeremyckahn.

If you make _any_ change to the code that causes a version change, you __MUST__ document it in the changelog.  This will prevent any confusion amongst those using this framework.
