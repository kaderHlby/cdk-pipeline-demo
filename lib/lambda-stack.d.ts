import lambda = require('@aws-cdk/aws-lambda');
import { App, Stack, StackProps } from '@aws-cdk/core';
export declare class LambdaStack extends Stack {
    readonly lambdaCode: lambda.CfnParametersCode;
    constructor(app: App, id: string, props?: StackProps);
}
