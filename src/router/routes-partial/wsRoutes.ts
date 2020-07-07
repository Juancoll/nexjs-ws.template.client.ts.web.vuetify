import { IRouteMetadata } from '@/lib/router';

import WSView from '@/views/ws';

import DemoWSServiceView from '@/views/ws/services/demo';
import CustomWSServiceView from '@/views/ws/services/custom';
import DbWSServiceView from '@/views/ws/services/db';
import JobsWSServiceView from '@/views/ws/services/jobs';
import OrgsWSServiceView from '@/views/ws/services/orgs';
import UsersWSServiceView from '@/views/ws/services/users';

import { RouteConfig } from 'vue-router';

export let routes: RouteConfig[] = [
    {
        path: '/ws',
        name: 'ws',
        component: WSView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-power-socket',
            iconColor: 'primary',
            title: 'WS',
            subtitle: 'Conn & Auth',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/demo',
        name: 'ws-services-demo',
        component: DemoWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS demo',
            subtitle: 'Demo ws service',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/custom',
        name: 'ws-services-custom',
        component: CustomWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS custom',
            subtitle: 'Custom ws service',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/db',
        name: 'ws-services-db',
        component: DbWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS db',
            subtitle: 'Db ws service',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/jobs',
        name: 'ws-services-jobs',
        component: JobsWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS jobs',
            subtitle: 'Jobs ws service',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/orgs',
        name: 'ws-services-orgs',
        component: OrgsWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS orgs',
            subtitle: 'Orgs ws service',
        } as IRouteMetadata,
    },
    {
        path: '/ws/services/users',
        name: 'ws-services-users',
        component: UsersWSServiceView,
        meta: {
            showInToolbar: false,
            parent: 'ws',
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'secondary',
            title: 'WS users',
            subtitle: 'Users ws service',
        } as IRouteMetadata,
    },
];
