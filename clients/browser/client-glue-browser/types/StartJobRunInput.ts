import { _NotificationProperty } from "./_NotificationProperty";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartJobRunInput shape
 */
export interface StartJobRunInput {
  /**
   * <p>The name of the job definition to use.</p>
   */
  JobName: string;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

  /**
   * <p>The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself.</p> <p>You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes.</p> <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p> <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p> <p>The number of AWS Glue data processing units (DPUs) to allocate to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p> <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p> <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are running a Python shell job, or an Apache Spark ETL job:</p> <ul> <li> <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p> </li> <li> <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p> </li> </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: _NotificationProperty;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p> <ul> <li> <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p> </li> <li> <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p> </li> <li> <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p> </li> </ul>
   */
  WorkerType?: "Standard" | "G.1X" | "G.2X" | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p> <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}