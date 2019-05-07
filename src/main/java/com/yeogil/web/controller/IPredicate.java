package com.yeogil.web.controller;

@FunctionalInterface
public interface IPredicate {
	public abstract boolean test(Object o);
}
