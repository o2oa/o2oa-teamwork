package com.x.teamwork.assemble.control.jaxrs.statistics;

import com.x.base.core.project.cache.Cache;
import com.x.base.core.project.jaxrs.StandardJaxrsAction;
import com.x.teamwork.assemble.control.service.ProjectGroupPersistService;
import com.x.teamwork.assemble.control.service.ProjectGroupQueryService;
import com.x.teamwork.assemble.control.service.ProjectQueryService;
import com.x.teamwork.assemble.control.service.StatisticQueryService;
import com.x.teamwork.assemble.control.service.SystemConfigQueryService;
import com.x.teamwork.core.entity.Project;

public class BaseAction extends StandardJaxrsAction {

	protected Cache.CacheCategory Ehcache = new Cache.CacheCategory( Project.class );
	
	protected 	ProjectQueryService projectQueryService = new ProjectQueryService();
	
	protected ProjectGroupQueryService projectGroupQueryService = new ProjectGroupQueryService();
	
	protected ProjectGroupPersistService projectGroupPersistService = new ProjectGroupPersistService();	
	
	protected 	SystemConfigQueryService systemConfigQueryService = new SystemConfigQueryService();
	
	protected 	StatisticQueryService statisticQueryService = new StatisticQueryService();
	
}
