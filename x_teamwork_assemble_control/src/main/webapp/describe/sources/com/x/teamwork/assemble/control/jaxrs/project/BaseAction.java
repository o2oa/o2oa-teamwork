package com.x.teamwork.assemble.control.jaxrs.project;

import com.x.base.core.project.cache.Cache;
import com.x.base.core.project.jaxrs.StandardJaxrsAction;
import com.x.teamwork.assemble.control.service.DynamicPersistService;
import com.x.teamwork.assemble.control.service.ProjectConfigQueryService;
import com.x.teamwork.assemble.control.service.ProjectGroupPersistService;
import com.x.teamwork.assemble.control.service.ProjectGroupQueryService;
import com.x.teamwork.assemble.control.service.ProjectPersistService;
import com.x.teamwork.assemble.control.service.ProjectQueryService;
import com.x.teamwork.assemble.control.service.SystemConfigQueryService;
import com.x.teamwork.core.entity.Project;


public class BaseAction extends StandardJaxrsAction {

	protected Cache.CacheCategory projectCache = new Cache.CacheCategory(Project.class);
	
	protected 	ProjectQueryService projectQueryService = new ProjectQueryService();
	
	protected 	ProjectPersistService projectPersistService = new ProjectPersistService();
	
	protected 	DynamicPersistService dynamicPersistService = new DynamicPersistService();
	
	protected ProjectGroupQueryService projectGroupQueryService = new ProjectGroupQueryService();
	
	protected ProjectGroupPersistService projectGroupPersistService = new ProjectGroupPersistService();	
	
	protected 	SystemConfigQueryService systemConfigQueryService = new SystemConfigQueryService();
	
	protected 	ProjectConfigQueryService projectConfigQueryService = new ProjectConfigQueryService();
	
}
