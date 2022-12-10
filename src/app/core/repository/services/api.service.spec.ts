import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { IssueData } from '../domain/issue-data';
import { RepoData } from '../domain/repo-data';
import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;
  
  let httpTestingController: HttpTestingController;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
   })
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

  it('should return data getRepo', fakeAsync (() => {
    const mockRepo: RepoData = {
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
        expect(repo).toEqual(mockRepo);
      });

    const req = httpTestingController.expectOne(
      'https://api.github.com/repos/angular/angular'
    );

    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    req.flush(mockRepo);

      // Call tick whic actually processes te response
      // tick();
  }));

  it('should return data getIssues', () => {
    const mockIssues: IssueData[] = [
     
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
      }

    ]
     ;

    service.getIssues('angular','angular',7,1)
      .subscribe(issues => {
        expect(issues).toEqual(mockIssues);
      });

    const req = httpTestingController.expectOne(
      'https://api.github.com/repos/angular/angular/issues?per_page=7&page=1'
    );
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    req.flush(mockIssues);
  });




});
