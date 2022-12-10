import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;
  
  let httpTestingController: HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
      
      imports: [HttpClientTestingModule],
      providers: [ApiService]
   })
   .compileComponents();
  });

  beforeEach(() => {
   // Returns a service with the MockBackend so we can test with dummy responses
   service = TestBed.inject(ApiService);
   // Inject the http service and test controller for each test
   httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data getRepo', () => {
    const mockRepo = {
      "id": 24195339,
      "node_id": "MDEwOlJlcG9zaXRvcnkyNDE5NTMzOQ==",
      "name": "angular",
      "full_name": "angular/angular",
      "private": false,
      "owner": {
        "login": "angular",
        "id": 139426,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
        "avatar_url": "https://avatars.githubusercontent.com/u/139426?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/angular",
        "html_url": "https://github.com/angular",
        "followers_url": "https://api.github.com/users/angular/followers",
        "following_url": "https://api.github.com/users/angular/following{/other_user}",
        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
        "organizations_url": "https://api.github.com/users/angular/orgs",
        "repos_url": "https://api.github.com/users/angular/repos",
        "events_url": "https://api.github.com/users/angular/events{/privacy}",
        "received_events_url": "https://api.github.com/users/angular/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/angular/angular",
      "description": "The modern web developer’s platform",
      "fork": false,
      "url": "https://api.github.com/repos/angular/angular",
      "forks_url": "https://api.github.com/repos/angular/angular/forks",
      "keys_url": "https://api.github.com/repos/angular/angular/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/angular/angular/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/angular/angular/teams",
      "hooks_url": "https://api.github.com/repos/angular/angular/hooks",
      "issue_events_url": "https://api.github.com/repos/angular/angular/issues/events{/number}",
      "events_url": "https://api.github.com/repos/angular/angular/events",
      "assignees_url": "https://api.github.com/repos/angular/angular/assignees{/user}",
      "branches_url": "https://api.github.com/repos/angular/angular/branches{/branch}",
      "tags_url": "https://api.github.com/repos/angular/angular/tags",
      "blobs_url": "https://api.github.com/repos/angular/angular/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/angular/angular/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/angular/angular/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/angular/angular/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/angular/angular/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/angular/angular/languages",
      "stargazers_url": "https://api.github.com/repos/angular/angular/stargazers",
      "contributors_url": "https://api.github.com/repos/angular/angular/contributors",
      "subscribers_url": "https://api.github.com/repos/angular/angular/subscribers",
      "subscription_url": "https://api.github.com/repos/angular/angular/subscription",
      "commits_url": "https://api.github.com/repos/angular/angular/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/angular/angular/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/angular/angular/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/angular/angular/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/angular/angular/contents/{+path}",
      "compare_url": "https://api.github.com/repos/angular/angular/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/angular/angular/merges",
      "archive_url": "https://api.github.com/repos/angular/angular/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/angular/angular/downloads",
      "issues_url": "https://api.github.com/repos/angular/angular/issues{/number}",
      "pulls_url": "https://api.github.com/repos/angular/angular/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/angular/angular/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/angular/angular/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/angular/angular/labels{/name}",
      "releases_url": "https://api.github.com/repos/angular/angular/releases{/id}",
      "deployments_url": "https://api.github.com/repos/angular/angular/deployments",
      "created_at": "2014-09-18T16:12:01Z",
      "updated_at": "2021-06-13T10:05:51Z",
      "pushed_at": "2021-06-13T09:05:13Z",
      "git_url": "git://github.com/angular/angular.git",
      "ssh_url": "git@github.com:angular/angular.git",
      "clone_url": "https://github.com/angular/angular.git",
      "svn_url": "https://github.com/angular/angular",
      "homepage": "https://angular.io",
      "size": 297090,
      "stargazers_count": 73869,
      "watchers_count": 73869,
      "language": "TypeScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 19371,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 2246,
      "license": {
        "key": "mit",
        "name": "MIT License",
        "spdx_id": "MIT",
        "url": "https://api.github.com/licenses/mit",
        "node_id": "MDc6TGljZW5zZTEz"
      },
      "forks": 19371,
      "open_issues": 2246,
      "watchers": 73869,
      "default_branch": "master",
      "temp_clone_token": null,
      "organization": {
        "login": "angular",
        "id": 139426,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==",
        "avatar_url": "https://avatars.githubusercontent.com/u/139426?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/angular",
        "html_url": "https://github.com/angular",
        "followers_url": "https://api.github.com/users/angular/followers",
        "following_url": "https://api.github.com/users/angular/following{/other_user}",
        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
        "organizations_url": "https://api.github.com/users/angular/orgs",
        "repos_url": "https://api.github.com/users/angular/repos",
        "events_url": "https://api.github.com/users/angular/events{/privacy}",
        "received_events_url": "https://api.github.com/users/angular/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "network_count": 19371,
      "subscribers_count": 3167
    } ;

    service.getRepo('angular','angular')
      .subscribe(repo => {
        expect(repo.name).toEqual('angular');
      });

    const req = httpTestingController.expectOne(
      'https://api.github.com/repos/angular/angular'
    );

    req.flush(mockRepo);
  });

  it('should return data getIssues', () => {
    const mockIssues = [
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42567",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42567/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42567/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42567/events",
        "html_url": "https://github.com/angular/angular/pull/42567",
        "id": 919752114,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY5MDE4MDYw",
        "number": 42567,
        "title": "build: remove unnecessary polyfills from tests",
        "user": {
          "login": "crisbeto",
          "id": 4450522,
          "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/crisbeto",
          "html_url": "https://github.com/crisbeto",
          "followers_url": "https://api.github.com/users/crisbeto/followers",
          "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
          "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
          "organizations_url": "https://api.github.com/users/crisbeto/orgs",
          "repos_url": "https://api.github.com/users/crisbeto/repos",
          "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
          "received_events_url": "https://api.github.com/users/crisbeto/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 217969169,
            "node_id": "MDU6TGFiZWwyMTc5NjkxNjk=",
            "url": "https://api.github.com/repos/angular/angular/labels/action:%20review",
            "name": "action: review",
            "color": "fbca04",
            "default": false,
            "description": ""
          },
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          },
          {
            "id": 193817683,
            "node_id": "MDU6TGFiZWwxOTM4MTc2ODM=",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20build%20&%20ci",
            "name": "comp: build & ci",
            "color": "c7def8",
            "default": false,
            "description": "Issue related to the Angular team's *own* build/CI tooling"
          },
          {
            "id": 655699838,
            "node_id": "MDU6TGFiZWw2NTU2OTk4Mzg=",
            "url": "https://api.github.com/repos/angular/angular/labels/target:%20patch",
            "name": "target: patch",
            "color": "5319e7",
            "default": false,
            "description": "This PR is targeted for the next patch release"
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": {
          "url": "https://api.github.com/repos/angular/angular/milestones/82",
          "html_url": "https://github.com/angular/angular/milestone/82",
          "labels_url": "https://api.github.com/repos/angular/angular/milestones/82/labels",
          "id": 3045967,
          "node_id": "MDk6TWlsZXN0b25lMzA0NTk2Nw==",
          "number": 82,
          "title": "Backlog",
          "description": "Milestone for triaged issues that have not yet been scheduled for resolution.",
          "creator": {
            "login": "IgorMinar",
            "id": 216296,
            "node_id": "MDQ6VXNlcjIxNjI5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/216296?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/IgorMinar",
            "html_url": "https://github.com/IgorMinar",
            "followers_url": "https://api.github.com/users/IgorMinar/followers",
            "following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
            "gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
            "organizations_url": "https://api.github.com/users/IgorMinar/orgs",
            "repos_url": "https://api.github.com/users/IgorMinar/repos",
            "events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
            "received_events_url": "https://api.github.com/users/IgorMinar/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 2050,
          "closed_issues": 5550,
          "state": "open",
          "created_at": "2018-01-18T16:52:20Z",
          "updated_at": "2021-06-13T09:03:39Z",
          "due_on": null,
          "closed_at": null
        },
        "comments": 0,
        "created_at": "2021-06-13T08:59:50Z",
        "updated_at": "2021-06-13T09:24:16Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42567",
          "html_url": "https://github.com/angular/angular/pull/42567",
          "diff_url": "https://github.com/angular/angular/pull/42567.diff",
          "patch_url": "https://github.com/angular/angular/pull/42567.patch"
        },
        "body": "Removes the polyfills for `MutationObserver` and `setPrototypeOf` from our testing setup, because none of the browsers that we support require them. This results in slightly less code and the removal of an external dependency.",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42566",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42566/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42566/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42566/events",
        "html_url": "https://github.com/angular/angular/pull/42566",
        "id": 919743912,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY5MDExNzU4",
        "number": 42566,
        "title": "feat(core): add opt-in test module teardown configuration",
        "user": {
          "login": "crisbeto",
          "id": 4450522,
          "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/crisbeto",
          "html_url": "https://github.com/crisbeto",
          "followers_url": "https://api.github.com/users/crisbeto/followers",
          "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
          "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
          "organizations_url": "https://api.github.com/users/crisbeto/orgs",
          "repos_url": "https://api.github.com/users/crisbeto/repos",
          "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
          "received_events_url": "https://api.github.com/users/crisbeto/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 217969169,
            "node_id": "MDU6TGFiZWwyMTc5NjkxNjk=",
            "url": "https://api.github.com/repos/angular/angular/labels/action:%20review",
            "name": "action: review",
            "color": "fbca04",
            "default": false,
            "description": ""
          },
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          },
          {
            "id": 375501288,
            "node_id": "MDU6TGFiZWwzNzU1MDEyODg=",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20core",
            "name": "comp: core",
            "color": "c7def8",
            "default": false,
            "description": "Runtime issues"
          },
          {
            "id": 209239910,
            "node_id": "MDU6TGFiZWwyMDkyMzk5MTA=",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20testing",
            "name": "comp: testing",
            "color": "c7def8",
            "default": false,
            "description": null
          },
          {
            "id": 2306290679,
            "node_id": "MDU6TGFiZWwyMzA2MjkwNjc5",
            "url": "https://api.github.com/repos/angular/angular/labels/target:%20minor",
            "name": "target: minor",
            "color": "5319e7",
            "default": false,
            "description": "This PR is targeted for the next minor release"
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": {
          "url": "https://api.github.com/repos/angular/angular/milestones/82",
          "html_url": "https://github.com/angular/angular/milestone/82",
          "labels_url": "https://api.github.com/repos/angular/angular/milestones/82/labels",
          "id": 3045967,
          "node_id": "MDk6TWlsZXN0b25lMzA0NTk2Nw==",
          "number": 82,
          "title": "Backlog",
          "description": "Milestone for triaged issues that have not yet been scheduled for resolution.",
          "creator": {
            "login": "IgorMinar",
            "id": 216296,
            "node_id": "MDQ6VXNlcjIxNjI5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/216296?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/IgorMinar",
            "html_url": "https://github.com/IgorMinar",
            "followers_url": "https://api.github.com/users/IgorMinar/followers",
            "following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
            "gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
            "organizations_url": "https://api.github.com/users/IgorMinar/orgs",
            "repos_url": "https://api.github.com/users/IgorMinar/repos",
            "events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
            "received_events_url": "https://api.github.com/users/IgorMinar/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 2050,
          "closed_issues": 5550,
          "state": "open",
          "created_at": "2018-01-18T16:52:20Z",
          "updated_at": "2021-06-13T09:03:39Z",
          "due_on": null,
          "closed_at": null
        },
        "comments": 0,
        "created_at": "2021-06-13T08:09:23Z",
        "updated_at": "2021-06-13T09:10:06Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42566",
          "html_url": "https://github.com/angular/angular/pull/42566",
          "diff_url": "https://github.com/angular/angular/pull/42566.diff",
          "patch_url": "https://github.com/angular/angular/pull/42566.patch"
        },
        "body": "We currently have two long-standing issues related to how `TestBed` tests are torn down:\r\n1. The dynamically-created test module isn't going to be destroyed, preventing the `ngOnDestroy` hooks on providers from running and keeping the component `style` nodes in the DOM.\r\n2. The test root elements aren't going to be removed from the DOM. Instead, they will be removed whenever another test component is created.\r\n\r\nBy themselves, these issues are easy to resolve, but given how long they've been around, there are a lot of unit tests out there that depend on the broken behavior.\r\n\r\nThese changes address the issues by introducing APIs that allow users to opt into the correct test teardown behavior either at the application level via `TestBed.initTestEnvironment` or the test suite level via `TestBed.configureTestingModule`.\r\n\r\nAt the moment, the new teardown behavior is opt-in, but the idea is that we'll eventually make it opt-out before removing the configuration altogether.\r\n\r\nFixes #18831.",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42565",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42565/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42565/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42565/events",
        "html_url": "https://github.com/angular/angular/pull/42565",
        "id": 919727582,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY4OTk5NTQ5",
        "number": 42565,
        "title": "fix(forms): allow minLength/maxLength validator to be bound to `null`",
        "user": {
          "login": "iRealNirmal",
          "id": 4091874,
          "node_id": "MDQ6VXNlcjQwOTE4NzQ=",
          "avatar_url": "https://avatars.githubusercontent.com/u/4091874?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/iRealNirmal",
          "html_url": "https://github.com/iRealNirmal",
          "followers_url": "https://api.github.com/users/iRealNirmal/followers",
          "following_url": "https://api.github.com/users/iRealNirmal/following{/other_user}",
          "gists_url": "https://api.github.com/users/iRealNirmal/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/iRealNirmal/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/iRealNirmal/subscriptions",
          "organizations_url": "https://api.github.com/users/iRealNirmal/orgs",
          "repos_url": "https://api.github.com/users/iRealNirmal/repos",
          "events_url": "https://api.github.com/users/iRealNirmal/events{/privacy}",
          "received_events_url": "https://api.github.com/users/iRealNirmal/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2021-06-13T06:13:25Z",
        "updated_at": "2021-06-13T07:01:45Z",
        "closed_at": null,
        "author_association": "CONTRIBUTOR",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42565",
          "html_url": "https://github.com/angular/angular/pull/42565",
          "diff_url": "https://github.com/angular/angular/pull/42565.diff",
          "patch_url": "https://github.com/angular/angular/pull/42565.patch"
        },
        "body": "If the validator is bound to be `null` then no validation occurs and\r\nattribute is not added to DOM.\r\n\r\nFor every validator type different PR will be raised as discussed in\r\nhttps://github.com/angular/angular/pull/42378.\r\n\r\nCloses #42267.\r\n\r\n## PR Checklist\r\nPlease check if your PR fulfills the following requirements:\r\n\r\n- [x] The commit message follows our guidelines: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit\r\n- [x] Tests for the changes have been added (for bug fixes / features)\r\n- [ ] Docs have been added / updated (for bug fixes / features)\r\n\r\n\r\n## PR Type\r\nWhat kind of change does this PR introduce?\r\n\r\n<!-- Please check the one that applies to this PR using \"x\". -->\r\n\r\n- [x] Bugfix\r\n- [ ] Feature\r\n- [ ] Code style update (formatting, local variables)\r\n- [ ] Refactoring (no functional changes, no api changes)\r\n- [ ] Build related changes\r\n- [ ] CI related changes\r\n- [ ] Documentation content changes\r\n- [ ] angular.io application / infrastructure changes\r\n- [ ] Other... Please describe:\r\n\r\n\r\n## What is the current behavior?\r\nNull data type is not supported\r\n\r\nIssue Number: #42267.\r\n\r\n\r\n## What is the new behavior?\r\nAdded support for null data type\r\n\r\n## Does this PR introduce a breaking change?\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n<!-- If this PR contains a breaking change, please describe the impact and migration path for existing applications below. -->\r\n\r\n\r\n## Other information\r\nThis is one of many PR which is going to be  raised for adding support of null validation. One can go through  conversation  here\r\n[https://github.com/angular/angular/pull/42378#issuecomment-858864123](https://github.com/angular/angular/pull/42378#issuecomment-858864123)",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42563",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42563/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42563/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42563/events",
        "html_url": "https://github.com/angular/angular/issues/42563",
        "id": 919618522,
        "node_id": "MDU6SXNzdWU5MTk2MTg1MjI=",
        "number": 42563,
        "title": "QueryList .first and .last should include undefined in type",
        "user": {
          "login": "baines",
          "id": 1444224,
          "node_id": "MDQ6VXNlcjE0NDQyMjQ=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1444224?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/baines",
          "html_url": "https://github.com/baines",
          "followers_url": "https://api.github.com/users/baines/followers",
          "following_url": "https://api.github.com/users/baines/following{/other_user}",
          "gists_url": "https://api.github.com/users/baines/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/baines/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/baines/subscriptions",
          "organizations_url": "https://api.github.com/users/baines/orgs",
          "repos_url": "https://api.github.com/users/baines/repos",
          "events_url": "https://api.github.com/users/baines/events{/privacy}",
          "received_events_url": "https://api.github.com/users/baines/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 2391912492,
            "node_id": "MDU6TGFiZWwyMzkxOTEyNDky",
            "url": "https://api.github.com/repos/angular/angular/labels/P3",
            "name": "P3",
            "color": "fad8c7",
            "default": false,
            "description": "Medium priority issue that needs to be resolved"
          },
          {
            "id": 375501288,
            "node_id": "MDU6TGFiZWwzNzU1MDEyODg=",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20core",
            "name": "comp: core",
            "color": "c7def8",
            "default": false,
            "description": "Runtime issues"
          },
          {
            "id": 1891836876,
            "node_id": "MDU6TGFiZWwxODkxODM2ODc2",
            "url": "https://api.github.com/repos/angular/angular/labels/core:%20inputs%20/%20outputs",
            "name": "core: inputs / outputs",
            "color": "8ee24d",
            "default": false,
            "description": ""
          },
          {
            "id": 1891800659,
            "node_id": "MDU6TGFiZWwxODkxODAwNjU5",
            "url": "https://api.github.com/repos/angular/angular/labels/core:%20queries",
            "name": "core: queries",
            "color": "8ee24d",
            "default": false,
            "description": ""
          },
          {
            "id": 226601219,
            "node_id": "MDU6TGFiZWwyMjY2MDEyMTk=",
            "url": "https://api.github.com/repos/angular/angular/labels/help%20wanted",
            "name": "help wanted",
            "color": "008672",
            "default": true,
            "description": "An issue that it suitable for a community contributor (based on its complexity/scope)."
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": {
          "url": "https://api.github.com/repos/angular/angular/milestones/82",
          "html_url": "https://github.com/angular/angular/milestone/82",
          "labels_url": "https://api.github.com/repos/angular/angular/milestones/82/labels",
          "id": 3045967,
          "node_id": "MDk6TWlsZXN0b25lMzA0NTk2Nw==",
          "number": 82,
          "title": "Backlog",
          "description": "Milestone for triaged issues that have not yet been scheduled for resolution.",
          "creator": {
            "login": "IgorMinar",
            "id": 216296,
            "node_id": "MDQ6VXNlcjIxNjI5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/216296?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/IgorMinar",
            "html_url": "https://github.com/IgorMinar",
            "followers_url": "https://api.github.com/users/IgorMinar/followers",
            "following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
            "gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
            "organizations_url": "https://api.github.com/users/IgorMinar/orgs",
            "repos_url": "https://api.github.com/users/IgorMinar/repos",
            "events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
            "received_events_url": "https://api.github.com/users/IgorMinar/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 2050,
          "closed_issues": 5550,
          "state": "open",
          "created_at": "2018-01-18T16:52:20Z",
          "updated_at": "2021-06-13T09:03:39Z",
          "due_on": null,
          "closed_at": null
        },
        "comments": 2,
        "created_at": "2021-06-12T17:24:09Z",
        "updated_at": "2021-06-12T20:47:37Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "body": "<!--\r\n\r\nOh hi there!\r\n\r\nTo expedite issue processing please search open and closed issues before submitting a new one.\r\nExisting issues often contain information about workarounds, resolution, or progress updates.\r\n\r\n-->\r\n\r\n# Bug Report\r\n\r\n### Affected Package\r\n`@angular/core`\r\n\r\n### Is this a regression?\r\nNo\r\n\r\n### Description\r\nThe [QueryList](https://angular.io/api/core/QueryList) `.first` and `.last` properties have the type `T`, but can be `undefined` when the list is empty - the type should be `T | undefined` so that the compiler can more correctly check their usage.\r\n\r\n## Minimal Reproduction\r\n\r\nThe following component compiles without any errors, but it is not valid to access `this.list.first.nativeElement` without checking `.first` for `undefined` beforehand.\r\n\r\n```typescript\r\nimport { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';\r\n@Component({\r\n  selector: 'app-bug',\r\n  template: `\r\n    <ng-container *ngIf=\"false\">\r\n      <div #something></div>\r\n    </ng-container>\r\n  `\r\n})\r\nexport class BugComponent implements AfterViewInit {\r\n  @ViewChildren(\"something\") list!: QueryList<ElementRef<HTMLDivElement>>;\r\n  ngAfterViewInit() {\r\n    console.log(\".first and .last have type T but can be undefined:\", this.list.first.nativeElement);\r\n  }\r\n}\r\n```\r\n\r\n## Your Environment\r\n\r\n**Angular Version:**\r\n<pre><code>\r\nAngular CLI: 12.0.4\r\nNode: 14.17.0\r\nPackage Manager: npm 6.14.13\r\nOS: linux x64\r\n\r\nAngular: 12.0.4\r\n... animations, cli, common, compiler, compiler-cli, core, forms\r\n... platform-browser, platform-browser-dynamic, router\r\n\r\nPackage                         Version\r\n---------------------------------------------------------\r\n@angular-devkit/architect       0.1200.4\r\n@angular-devkit/build-angular   12.0.4\r\n@angular-devkit/core            12.0.4\r\n@angular-devkit/schematics      12.0.4\r\n@schematics/angular             12.0.4\r\nrxjs                            6.6.7\r\ntypescript                      4.2.4\r\n</code></pre>\r\n",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42562",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42562/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42562/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42562/events",
        "html_url": "https://github.com/angular/angular/pull/42562",
        "id": 919578513,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY4ODg0MTQ4",
        "number": 42562,
        "title": "perf(compiler-cli): skip analysis in incremental builds for files wit…",
        "user": {
          "login": "JoostK",
          "id": 123679,
          "node_id": "MDQ6VXNlcjEyMzY3OQ==",
          "avatar_url": "https://avatars.githubusercontent.com/u/123679?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/JoostK",
          "html_url": "https://github.com/JoostK",
          "followers_url": "https://api.github.com/users/JoostK/followers",
          "following_url": "https://api.github.com/users/JoostK/following{/other_user}",
          "gists_url": "https://api.github.com/users/JoostK/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/JoostK/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/JoostK/subscriptions",
          "organizations_url": "https://api.github.com/users/JoostK/orgs",
          "repos_url": "https://api.github.com/users/JoostK/repos",
          "events_url": "https://api.github.com/users/JoostK/events{/privacy}",
          "received_events_url": "https://api.github.com/users/JoostK/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 217969169,
            "node_id": "MDU6TGFiZWwyMTc5NjkxNjk=",
            "url": "https://api.github.com/repos/angular/angular/labels/action:%20review",
            "name": "action: review",
            "color": "fbca04",
            "default": false,
            "description": ""
          },
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          },
          {
            "id": 1412404129,
            "node_id": "MDU6TGFiZWwxNDEyNDA0MTI5",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20compiler",
            "name": "comp: compiler",
            "color": "c7def8",
            "default": false,
            "description": ""
          },
          {
            "id": 655699838,
            "node_id": "MDU6TGFiZWw2NTU2OTk4Mzg=",
            "url": "https://api.github.com/repos/angular/angular/labels/target:%20patch",
            "name": "target: patch",
            "color": "5319e7",
            "default": false,
            "description": "This PR is targeted for the next patch release"
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": {
          "url": "https://api.github.com/repos/angular/angular/milestones/82",
          "html_url": "https://github.com/angular/angular/milestone/82",
          "labels_url": "https://api.github.com/repos/angular/angular/milestones/82/labels",
          "id": 3045967,
          "node_id": "MDk6TWlsZXN0b25lMzA0NTk2Nw==",
          "number": 82,
          "title": "Backlog",
          "description": "Milestone for triaged issues that have not yet been scheduled for resolution.",
          "creator": {
            "login": "IgorMinar",
            "id": 216296,
            "node_id": "MDQ6VXNlcjIxNjI5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/216296?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/IgorMinar",
            "html_url": "https://github.com/IgorMinar",
            "followers_url": "https://api.github.com/users/IgorMinar/followers",
            "following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
            "gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
            "organizations_url": "https://api.github.com/users/IgorMinar/orgs",
            "repos_url": "https://api.github.com/users/IgorMinar/repos",
            "events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
            "received_events_url": "https://api.github.com/users/IgorMinar/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 2050,
          "closed_issues": 5550,
          "state": "open",
          "created_at": "2018-01-18T16:52:20Z",
          "updated_at": "2021-06-13T09:03:39Z",
          "due_on": null,
          "closed_at": null
        },
        "comments": 0,
        "created_at": "2021-06-12T14:47:05Z",
        "updated_at": "2021-06-12T18:00:29Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42562",
          "html_url": "https://github.com/angular/angular/pull/42562",
          "diff_url": "https://github.com/angular/angular/pull/42562.diff",
          "patch_url": "https://github.com/angular/angular/pull/42562.patch"
        },
        "body": "…hout Angular behavior\r\n\r\nIn an incremental rebuild, the compiler attempts to reuse as much\r\nanalysis data from a prior compilation as possible to avoid doing the\r\nanalysis work again. For source files without Angular behavior however,\r\nno analysis data would be recorded such that the source file had to be\r\nreanalyzed each rebuild, even if it has not changed.\r\n\r\nThis commit avoids the analysis of such source files by registering\r\nthese files as not containing any Angular behavior; allowing subsequent\r\nrebuilds to avoid the analysis work.",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42561",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42561/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42561/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42561/events",
        "html_url": "https://github.com/angular/angular/pull/42561",
        "id": 919577620,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY4ODgzNDE0",
        "number": 42561,
        "title": "aio/docs - minor sidenav styles improvements",
        "user": {
          "login": "dario-piotrowicz",
          "id": 61631103,
          "node_id": "MDQ6VXNlcjYxNjMxMTAz",
          "avatar_url": "https://avatars.githubusercontent.com/u/61631103?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/dario-piotrowicz",
          "html_url": "https://github.com/dario-piotrowicz",
          "followers_url": "https://api.github.com/users/dario-piotrowicz/followers",
          "following_url": "https://api.github.com/users/dario-piotrowicz/following{/other_user}",
          "gists_url": "https://api.github.com/users/dario-piotrowicz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/dario-piotrowicz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/dario-piotrowicz/subscriptions",
          "organizations_url": "https://api.github.com/users/dario-piotrowicz/orgs",
          "repos_url": "https://api.github.com/users/dario-piotrowicz/repos",
          "events_url": "https://api.github.com/users/dario-piotrowicz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/dario-piotrowicz/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2021-06-12T14:43:26Z",
        "updated_at": "2021-06-12T14:55:37Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42561",
          "html_url": "https://github.com/angular/angular/pull/42561",
          "diff_url": "https://github.com/angular/angular/pull/42561.diff",
          "patch_url": "https://github.com/angular/angular/pull/42561.patch"
        },
        "body": "## PR Checklist\r\nPlease check if your PR fulfills the following requirements:\r\n\r\n- [x] The commit message follows our guidelines: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit\r\n- [ ] Tests for the changes have been added (for bug fixes / features)\r\n- [ ] Docs have been added / updated (for bug fixes / features)\r\n\r\n\r\n## PR Type\r\nWhat kind of change does this PR introduce?\r\n\r\n<!-- Please check the one that applies to this PR using \"x\". -->\r\n\r\n- [x] Bugfix\r\n- [ ] Feature\r\n- [ ] Code style update (formatting, local variables)\r\n- [ ] Refactoring (no functional changes, no api changes)\r\n- [ ] Build related changes\r\n- [ ] CI related changes\r\n- [ ] Documentation content changes\r\n- [ ] angular.io application / infrastructure changes\r\n- [ ] Other... Please describe:\r\n\r\n\r\n## What is the current behavior?\r\n<!-- Please describe the current behavior that you are modifying, or link to a relevant issue. -->\r\n\r\nIssue Number: https://github.com/angular/angular/issues/42552\r\n\r\nThe sidenav at [angular.io/docs](https://angular.io/docs):\r\n  - produces unwanted overflow animation around the chevron icons when opening/closing items\r\n  - may reduce some of the chevron icons' size (creating unwanted differences between the icons' sizes)\r\n  - crops the outlined of focused nav items\r\n\r\n## What is the new behavior?\r\n\r\nThe sidenav:\r\n  - no longer produces the unwanted overflow\r\n  - keeps the icon sizes consistent at 24px\r\n  - has a minimal margin preventing the cropping of nav items outlines \r\n\r\n## Does this PR introduce a breaking change?\r\n\r\n- [ ] Yes\r\n- [x] No\r\n\r\n\r\n<!-- If this PR contains a breaking change, please describe the impact and migration path for existing applications below. -->\r\n\r\n\r\n## Other information\r\n",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/angular/angular/issues/42560",
        "repository_url": "https://api.github.com/repos/angular/angular",
        "labels_url": "https://api.github.com/repos/angular/angular/issues/42560/labels{/name}",
        "comments_url": "https://api.github.com/repos/angular/angular/issues/42560/comments",
        "events_url": "https://api.github.com/repos/angular/angular/issues/42560/events",
        "html_url": "https://github.com/angular/angular/pull/42560",
        "id": 919460552,
        "node_id": "MDExOlB1bGxSZXF1ZXN0NjY4Nzg2NDAx",
        "number": 42560,
        "title": "fix(router): error if module is destroyed before location is initialized",
        "user": {
          "login": "crisbeto",
          "id": 4450522,
          "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/4450522?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/crisbeto",
          "html_url": "https://github.com/crisbeto",
          "followers_url": "https://api.github.com/users/crisbeto/followers",
          "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
          "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
          "organizations_url": "https://api.github.com/users/crisbeto/orgs",
          "repos_url": "https://api.github.com/users/crisbeto/repos",
          "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
          "received_events_url": "https://api.github.com/users/crisbeto/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 217969169,
            "node_id": "MDU6TGFiZWwyMTc5NjkxNjk=",
            "url": "https://api.github.com/repos/angular/angular/labels/action:%20review",
            "name": "action: review",
            "color": "fbca04",
            "default": false,
            "description": ""
          },
          {
            "id": 149476251,
            "node_id": "MDU6TGFiZWwxNDk0NzYyNTE=",
            "url": "https://api.github.com/repos/angular/angular/labels/cla:%20yes",
            "name": "cla: yes",
            "color": "009800",
            "default": false,
            "description": null
          },
          {
            "id": 375500771,
            "node_id": "MDU6TGFiZWwzNzU1MDA3NzE=",
            "url": "https://api.github.com/repos/angular/angular/labels/comp:%20router",
            "name": "comp: router",
            "color": "c7def8",
            "default": false,
            "description": null
          },
          {
            "id": 655699838,
            "node_id": "MDU6TGFiZWw2NTU2OTk4Mzg=",
            "url": "https://api.github.com/repos/angular/angular/labels/target:%20patch",
            "name": "target: patch",
            "color": "5319e7",
            "default": false,
            "description": "This PR is targeted for the next patch release"
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": {
          "url": "https://api.github.com/repos/angular/angular/milestones/82",
          "html_url": "https://github.com/angular/angular/milestone/82",
          "labels_url": "https://api.github.com/repos/angular/angular/milestones/82/labels",
          "id": 3045967,
          "node_id": "MDk6TWlsZXN0b25lMzA0NTk2Nw==",
          "number": 82,
          "title": "Backlog",
          "description": "Milestone for triaged issues that have not yet been scheduled for resolution.",
          "creator": {
            "login": "IgorMinar",
            "id": 216296,
            "node_id": "MDQ6VXNlcjIxNjI5Ng==",
            "avatar_url": "https://avatars.githubusercontent.com/u/216296?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/IgorMinar",
            "html_url": "https://github.com/IgorMinar",
            "followers_url": "https://api.github.com/users/IgorMinar/followers",
            "following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
            "gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
            "organizations_url": "https://api.github.com/users/IgorMinar/orgs",
            "repos_url": "https://api.github.com/users/IgorMinar/repos",
            "events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
            "received_events_url": "https://api.github.com/users/IgorMinar/received_events",
            "type": "User",
            "site_admin": false
          },
          "open_issues": 2050,
          "closed_issues": 5550,
          "state": "open",
          "created_at": "2018-01-18T16:52:20Z",
          "updated_at": "2021-06-13T09:03:39Z",
          "due_on": null,
          "closed_at": null
        },
        "comments": 0,
        "created_at": "2021-06-12T06:18:38Z",
        "updated_at": "2021-06-12T06:54:47Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "pull_request": {
          "url": "https://api.github.com/repos/angular/angular/pulls/42560",
          "html_url": "https://github.com/angular/angular/pull/42560",
          "diff_url": "https://github.com/angular/angular/pull/42560.diff",
          "patch_url": "https://github.com/angular/angular/pull/42560.patch"
        },
        "body": "This is something I ran into while working on a fix for the `TestBed` module teardown behavior for #18831. In the `RouterInitializer.appInitializer` we have a callback to the `LOCATION_INITIALIZED` which has to do some DI lookups. The problem is that if the module is destroyed before the location promise resolves, the `Injector.get` calls will fail. This is unlikely to happen in a real app, but it'll show up in unit tests once the test module teardown behavior is fixed.",
        "performed_via_github_app": null
      }
    ]
     ;

    service.getIssues('angular','angular',7,1)
      .subscribe(issues => {
        expect(issues[0].id).toEqual(919752114);
      });

    const req = httpTestingController.expectOne(
      'https://api.github.com/repos/angular/angular/issues?per_page=7&page=1'
    );

    req.flush(mockIssues);
  });




});
