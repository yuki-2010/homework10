// 监听3000端口，便于执行test
import express from "express";

import { createSSRApp } from "vue";

import { renderToString } from "vue/server-renderer";