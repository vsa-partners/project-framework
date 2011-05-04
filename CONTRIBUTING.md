This framework is very much in flux at the moment.  If you are a VSA employee, please [message @jeremyckahn](https://github.com/inbox/new) to get contributor access.

If you need to make a change or addition to the framework, please thoroughly document your changes in your Git commit message.  If you are unsure if your changes will create bugs elsewhere in the framework, the best thing to do is [make a Git branch](http://book.git-scm.com/3_basic_branching_and_merging.html) and make your changes there.  When you are done, have another team member who is familiar with the framework (such as [@jeremyckahn](https://github.com/jeremyckahn) or [@xak](https://github.com/xak)) review your changes before merging it back into the `master` branch.  If you have any questions, please contact Jeremy.

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

The versions are recorded in [changelog.md](https://github.com/vsa-partners/project-framework/blob/master/changelog.md)

Issue tracking
---
Github has a handy [issue tracker](https://github.com/vsa-partners/project-framework/issues) built right in.  If you find any bugs with this framework, or if you would like to make a feature request, please make a ticket for it.

Wiki
---
Github provides us with a free Wiki.  This is a great place to record useful information (related to anything that we do with development at VSA), tutorials, or just general documentation.

Everything is public.
---
Please have some discretion when contributing.  We want to get more involved with the open source community, so all of the work that we do in the repo is publicly viewable.  This is not a good place to store sensitive information like passwords.