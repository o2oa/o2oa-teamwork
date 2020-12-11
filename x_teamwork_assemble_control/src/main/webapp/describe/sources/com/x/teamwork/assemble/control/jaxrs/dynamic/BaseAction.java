package com.x.teamwork.assemble.control.jaxrs.dynamic;

import com.x.base.core.project.jaxrs.StandardJaxrsAction;
import com.x.teamwork.assemble.control.service.DynamicQueryService;
import com.x.teamwork.assemble.control.service.ChatQueryService;
import com.x.teamwork.assemble.control.service.DynamicPersistService;

public class BaseAction extends StandardJaxrsAction {
	
	protected 	DynamicPersistService dynamicPersistService = new DynamicPersistService();

	protected 	DynamicQueryService dynamicQueryService = new DynamicQueryService();
	
	protected 	ChatQueryService chatQueryService = new ChatQueryService();
}
