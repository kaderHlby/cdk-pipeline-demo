import lambda = require('@aws-cdk/aws-lambda');
import { App, Stack, StackProps } from '@aws-cdk/core';
export interface PipelineStackProps extends StackProps {
    readonly lambdaCode: lambda.CfnParametersCode;
}
export declare class PipelineStack extends Stack {
    constructor(app: App, id: string, props: PipelineStackProps);
}
