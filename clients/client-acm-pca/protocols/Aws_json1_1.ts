import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput
} from "../commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput
} from "../commands/CreateCertificateAuthorityCommand";
import {
  CreatePermissionCommandInput,
  CreatePermissionCommandOutput
} from "../commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput
} from "../commands/DeleteCertificateAuthorityCommand";
import {
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput
} from "../commands/DeletePermissionCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput
} from "../commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput
} from "../commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput
} from "../commands/GetCertificateAuthorityCsrCommand";
import {
  GetCertificateCommandInput,
  GetCertificateCommandOutput
} from "../commands/GetCertificateCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput
} from "../commands/ImportCertificateAuthorityCertificateCommand";
import {
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput
} from "../commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput
} from "../commands/ListCertificateAuthoritiesCommand";
import {
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
} from "../commands/ListPermissionsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput
} from "../commands/RestoreCertificateAuthorityCommand";
import {
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput
} from "../commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput
} from "../commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput
} from "../commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput
} from "../commands/UpdateCertificateAuthorityCommand";
import {
  ASN1Subject,
  ActionType,
  CertificateAuthority,
  CertificateAuthorityConfiguration,
  CertificateMismatchException,
  ConcurrentModificationException,
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityResponse,
  CreatePermissionRequest,
  CrlConfiguration,
  DeleteCertificateAuthorityRequest,
  DeletePermissionRequest,
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
  DescribeCertificateAuthorityRequest,
  DescribeCertificateAuthorityResponse,
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
  GetCertificateAuthorityCsrRequest,
  GetCertificateAuthorityCsrResponse,
  GetCertificateRequest,
  GetCertificateResponse,
  ImportCertificateAuthorityCertificateRequest,
  InvalidArgsException,
  InvalidArnException,
  InvalidNextTokenException,
  InvalidPolicyException,
  InvalidRequestException,
  InvalidStateException,
  InvalidTagException,
  IssueCertificateRequest,
  IssueCertificateResponse,
  LimitExceededException,
  ListCertificateAuthoritiesRequest,
  ListCertificateAuthoritiesResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListTagsRequest,
  ListTagsResponse,
  MalformedCSRException,
  MalformedCertificateException,
  Permission,
  PermissionAlreadyExistsException,
  RequestAlreadyProcessedException,
  RequestFailedException,
  RequestInProgressException,
  ResourceNotFoundException,
  RestoreCertificateAuthorityRequest,
  RevocationConfiguration,
  RevokeCertificateRequest,
  Tag,
  TagCertificateAuthorityRequest,
  TooManyTagsException,
  UntagCertificateAuthorityRequest,
  UpdateCertificateAuthorityRequest,
  Validity
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateCertificateAuthorityCommand(
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.CreateCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    CreateCertificateAuthorityRequest: serializeAws_json1_1CreateCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.CreateCertificateAuthorityAuditReport";
  let body: any = {};
  const wrappedBody: any = {
    CreateCertificateAuthorityAuditReportRequest: serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCertificateAuthorityAuditReport",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreatePermissionCommand(
  input: CreatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.CreatePermission";
  let body: any = {};
  const wrappedBody: any = {
    CreatePermissionRequest: serializeAws_json1_1CreatePermissionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreatePermission",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteCertificateAuthorityCommand(
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DeleteCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    DeleteCertificateAuthorityRequest: serializeAws_json1_1DeleteCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeletePermissionCommand(
  input: DeletePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DeletePermission";
  let body: any = {};
  const wrappedBody: any = {
    DeletePermissionRequest: serializeAws_json1_1DeletePermissionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeletePermission",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCertificateAuthorityCommand(
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DescribeCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    DescribeCertificateAuthorityRequest: serializeAws_json1_1DescribeCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.DescribeCertificateAuthorityAuditReport";
  let body: any = {};
  const wrappedBody: any = {
    DescribeCertificateAuthorityAuditReportRequest: serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCertificateAuthorityAuditReport",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCertificateCommand(
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificate";
  let body: any = {};
  const wrappedBody: any = {
    GetCertificateRequest: serializeAws_json1_1GetCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCertificateAuthorityCertificateCommand(
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCertificate";
  let body: any = {};
  const wrappedBody: any = {
    GetCertificateAuthorityCertificateRequest: serializeAws_json1_1GetCertificateAuthorityCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCertificateAuthorityCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCertificateAuthorityCsrCommand(
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCsr";
  let body: any = {};
  const wrappedBody: any = {
    GetCertificateAuthorityCsrRequest: serializeAws_json1_1GetCertificateAuthorityCsrRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCertificateAuthorityCsr",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportCertificateAuthorityCertificateCommand(
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.ImportCertificateAuthorityCertificate";
  let body: any = {};
  const wrappedBody: any = {
    ImportCertificateAuthorityCertificateRequest: serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportCertificateAuthorityCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1IssueCertificateCommand(
  input: IssueCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.IssueCertificate";
  let body: any = {};
  const wrappedBody: any = {
    IssueCertificateRequest: serializeAws_json1_1IssueCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/IssueCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListCertificateAuthoritiesCommand(
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListCertificateAuthorities";
  let body: any = {};
  const wrappedBody: any = {
    ListCertificateAuthoritiesRequest: serializeAws_json1_1ListCertificateAuthoritiesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListCertificateAuthorities",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPermissionsCommand(
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListPermissions";
  let body: any = {};
  const wrappedBody: any = {
    ListPermissionsRequest: serializeAws_json1_1ListPermissionsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPermissions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListTags";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsRequest: serializeAws_json1_1ListTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RestoreCertificateAuthorityCommand(
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.RestoreCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    RestoreCertificateAuthorityRequest: serializeAws_json1_1RestoreCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RevokeCertificateCommand(
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.RevokeCertificate";
  let body: any = {};
  const wrappedBody: any = {
    RevokeCertificateRequest: serializeAws_json1_1RevokeCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RevokeCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagCertificateAuthorityCommand(
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.TagCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    TagCertificateAuthorityRequest: serializeAws_json1_1TagCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagCertificateAuthorityCommand(
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.UntagCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    UntagCertificateAuthorityRequest: serializeAws_json1_1UntagCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateCertificateAuthorityCommand(
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.UpdateCertificateAuthority";
  let body: any = {};
  const wrappedBody: any = {
    UpdateCertificateAuthorityRequest: serializeAws_json1_1UpdateCertificateAuthorityRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateCertificateAuthority",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(
    data.CreateCertificateAuthorityResponse,
    context
  );
  const response: CreateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCertificateAuthorityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = await deserializeAws_json1_1InvalidPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(
    data.CreateCertificateAuthorityAuditReportResponse,
    context
  );
  const response: CreateCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCertificateAuthorityAuditReportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreatePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePermissionCommandError(output, context);
  }
  const response: CreatePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PermissionAlreadyExistsException":
    case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
      response = await deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const response: DeleteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeletePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePermissionCommandError(output, context);
  }
  const response: DeletePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(
    data.DescribeCertificateAuthorityResponse,
    context
  );
  const response: DescribeCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateAuthorityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(
    data.DescribeCertificateAuthorityAuditReportResponse,
    context
  );
  const response: DescribeCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateAuthorityAuditReportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateResponse(
    data.GetCertificateResponse,
    context
  );
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(
    data.GetCertificateAuthorityCertificateResponse,
    context
  );
  const response: GetCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateAuthorityCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCertificateAuthorityCsrCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(
    data.GetCertificateAuthorityCsrResponse,
    context
  );
  const response: GetCertificateAuthorityCsrCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateAuthorityCsrResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(
      output,
      context
    );
  }
  const response: ImportCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CertificateMismatchException":
    case "com.amazonaws.acmpca#CertificateMismatchException":
      response = await deserializeAws_json1_1CertificateMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedCertificateException":
    case "com.amazonaws.acmpca#MalformedCertificateException":
      response = await deserializeAws_json1_1MalformedCertificateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1IssueCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IssueCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IssueCertificateResponse(
    data.IssueCertificateResponse,
    context
  );
  const response: IssueCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IssueCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1IssueCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedCSRException":
    case "com.amazonaws.acmpca#MalformedCSRException":
      response = await deserializeAws_json1_1MalformedCSRExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListCertificateAuthoritiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(
    data.ListCertificateAuthoritiesResponse,
    context
  );
  const response: ListCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCertificateAuthoritiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCertificateAuthoritiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(
    data.ListPermissionsResponse,
    context
  );
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(
    data.ListTagsResponse,
    context
  );
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RestoreCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const response: RestoreCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RevokeCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
  }
  const response: RevokeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestAlreadyProcessedException":
    case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
      response = await deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = await deserializeAws_json1_1RequestFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const response: TagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acmpca#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const response: UntagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const response: UpdateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = await deserializeAws_json1_1InvalidPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.acmpca#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1CertificateMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CertificateMismatchException> => {
  const deserialized: any = deserializeAws_json1_1CertificateMismatchException(
    output.body,
    context
  );
  const contents: CertificateMismatchException = {
    __type: "CertificateMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    output.body,
    context
  );
  const contents: ConcurrentModificationException = {
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(
    output.body,
    context
  );
  const contents: InvalidArgsException = {
    __type: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    output.body,
    context
  );
  const contents: InvalidArnException = {
    __type: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const deserialized: any = deserializeAws_json1_1InvalidPolicyException(
    output.body,
    context
  );
  const contents: InvalidPolicyException = {
    __type: "InvalidPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    output.body,
    context
  );
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    output.body,
    context
  );
  const contents: InvalidStateException = {
    __type: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    output.body,
    context
  );
  const contents: InvalidTagException = {
    __type: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedCSRExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MalformedCSRException> => {
  const deserialized: any = deserializeAws_json1_1MalformedCSRException(
    output.body,
    context
  );
  const contents: MalformedCSRException = {
    __type: "MalformedCSRException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedCertificateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const deserialized: any = deserializeAws_json1_1MalformedCertificateException(
    output.body,
    context
  );
  const contents: MalformedCertificateException = {
    __type: "MalformedCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PermissionAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1PermissionAlreadyExistsException(
    output.body,
    context
  );
  const contents: PermissionAlreadyExistsException = {
    __type: "PermissionAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestAlreadyProcessedException> => {
  const deserialized: any = deserializeAws_json1_1RequestAlreadyProcessedException(
    output.body,
    context
  );
  const contents: RequestAlreadyProcessedException = {
    __type: "RequestAlreadyProcessedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestFailedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const deserialized: any = deserializeAws_json1_1RequestFailedException(
    output.body,
    context
  );
  const contents: RequestFailedException = {
    __type: "RequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestInProgressException> => {
  const deserialized: any = deserializeAws_json1_1RequestInProgressException(
    output.body,
    context
  );
  const contents: RequestInProgressException = {
    __type: "RequestInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    output.body,
    context
  );
  const contents: TooManyTagsException = {
    __type: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ASN1Subject = (
  input: ASN1Subject,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CommonName !== undefined) {
    bodyParams["CommonName"] = input.CommonName;
  }
  if (input.Country !== undefined) {
    bodyParams["Country"] = input.Country;
  }
  if (input.DistinguishedNameQualifier !== undefined) {
    bodyParams["DistinguishedNameQualifier"] = input.DistinguishedNameQualifier;
  }
  if (input.GenerationQualifier !== undefined) {
    bodyParams["GenerationQualifier"] = input.GenerationQualifier;
  }
  if (input.GivenName !== undefined) {
    bodyParams["GivenName"] = input.GivenName;
  }
  if (input.Initials !== undefined) {
    bodyParams["Initials"] = input.Initials;
  }
  if (input.Locality !== undefined) {
    bodyParams["Locality"] = input.Locality;
  }
  if (input.Organization !== undefined) {
    bodyParams["Organization"] = input.Organization;
  }
  if (input.OrganizationalUnit !== undefined) {
    bodyParams["OrganizationalUnit"] = input.OrganizationalUnit;
  }
  if (input.Pseudonym !== undefined) {
    bodyParams["Pseudonym"] = input.Pseudonym;
  }
  if (input.SerialNumber !== undefined) {
    bodyParams["SerialNumber"] = input.SerialNumber;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.Surname !== undefined) {
    bodyParams["Surname"] = input.Surname;
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionList = (
  input: Array<ActionType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CertificateAuthorityConfiguration = (
  input: CertificateAuthorityConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KeyAlgorithm !== undefined) {
    bodyParams["KeyAlgorithm"] = input.KeyAlgorithm;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  if (input.Subject !== undefined) {
    bodyParams["Subject"] = serializeAws_json1_1ASN1Subject(
      input.Subject,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (
  input: CreateCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AuditReportResponseFormat !== undefined) {
    bodyParams["AuditReportResponseFormat"] = input.AuditReportResponseFormat;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCertificateAuthorityRequest = (
  input: CreateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityConfiguration !== undefined) {
    bodyParams[
      "CertificateAuthorityConfiguration"
    ] = serializeAws_json1_1CertificateAuthorityConfiguration(
      input.CertificateAuthorityConfiguration,
      context
    );
  }
  if (input.CertificateAuthorityType !== undefined) {
    bodyParams["CertificateAuthorityType"] = input.CertificateAuthorityType;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.RevocationConfiguration !== undefined) {
    bodyParams[
      "RevocationConfiguration"
    ] = serializeAws_json1_1RevocationConfiguration(
      input.RevocationConfiguration,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePermissionRequest = (
  input: CreatePermissionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Actions !== undefined) {
    bodyParams["Actions"] = serializeAws_json1_1ActionList(
      input.Actions,
      context
    );
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.SourceAccount !== undefined) {
    bodyParams["SourceAccount"] = input.SourceAccount;
  }
  return bodyParams;
};

const serializeAws_json1_1CrlConfiguration = (
  input: CrlConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomCname !== undefined) {
    bodyParams["CustomCname"] = input.CustomCname;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.ExpirationInDays !== undefined) {
    bodyParams["ExpirationInDays"] = input.ExpirationInDays;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCertificateAuthorityRequest = (
  input: DeleteCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.PermanentDeletionTimeInDays !== undefined) {
    bodyParams["PermanentDeletionTimeInDays"] =
      input.PermanentDeletionTimeInDays;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePermissionRequest = (
  input: DeletePermissionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.SourceAccount !== undefined) {
    bodyParams["SourceAccount"] = input.SourceAccount;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (
  input: DescribeCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AuditReportId !== undefined) {
    bodyParams["AuditReportId"] = input.AuditReportId;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCertificateAuthorityRequest = (
  input: DescribeCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (
  input: GetCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (
  input: GetCertificateAuthorityCsrRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateRequest = (
  input: GetCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = context.base64Encoder(input.Certificate);
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.CertificateChain !== undefined) {
    bodyParams["CertificateChain"] = context.base64Encoder(
      input.CertificateChain
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IssueCertificateRequest = (
  input: IssueCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Csr !== undefined) {
    bodyParams["Csr"] = context.base64Encoder(input.Csr);
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  if (input.TemplateArn !== undefined) {
    bodyParams["TemplateArn"] = input.TemplateArn;
  }
  if (input.Validity !== undefined) {
    bodyParams["Validity"] = serializeAws_json1_1Validity(
      input.Validity,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListCertificateAuthoritiesRequest = (
  input: ListCertificateAuthoritiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPermissionsRequest = (
  input: ListPermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1RestoreCertificateAuthorityRequest = (
  input: RestoreCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RevocationConfiguration = (
  input: RevocationConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CrlConfiguration !== undefined) {
    bodyParams["CrlConfiguration"] = serializeAws_json1_1CrlConfiguration(
      input.CrlConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RevokeCertificateRequest = (
  input: RevokeCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.CertificateSerial !== undefined) {
    bodyParams["CertificateSerial"] = input.CertificateSerial;
  }
  if (input.RevocationReason !== undefined) {
    bodyParams["RevocationReason"] = input.RevocationReason;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagCertificateAuthorityRequest = (
  input: TagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UntagCertificateAuthorityRequest = (
  input: UntagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCertificateAuthorityRequest = (
  input: UpdateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.RevocationConfiguration !== undefined) {
    bodyParams[
      "RevocationConfiguration"
    ] = serializeAws_json1_1RevocationConfiguration(
      input.RevocationConfiguration,
      context
    );
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1Validity = (
  input: Validity,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const deserializeAws_json1_1ASN1Subject = (
  output: any,
  context: __SerdeContext
): ASN1Subject => {
  let contents: any = {
    __type: "ASN1Subject",
    CommonName: undefined,
    Country: undefined,
    DistinguishedNameQualifier: undefined,
    GenerationQualifier: undefined,
    GivenName: undefined,
    Initials: undefined,
    Locality: undefined,
    Organization: undefined,
    OrganizationalUnit: undefined,
    Pseudonym: undefined,
    SerialNumber: undefined,
    State: undefined,
    Surname: undefined,
    Title: undefined
  };
  if (output.CommonName !== undefined) {
    contents.CommonName = output.CommonName;
  }
  if (output.Country !== undefined) {
    contents.Country = output.Country;
  }
  if (output.DistinguishedNameQualifier !== undefined) {
    contents.DistinguishedNameQualifier = output.DistinguishedNameQualifier;
  }
  if (output.GenerationQualifier !== undefined) {
    contents.GenerationQualifier = output.GenerationQualifier;
  }
  if (output.GivenName !== undefined) {
    contents.GivenName = output.GivenName;
  }
  if (output.Initials !== undefined) {
    contents.Initials = output.Initials;
  }
  if (output.Locality !== undefined) {
    contents.Locality = output.Locality;
  }
  if (output.Organization !== undefined) {
    contents.Organization = output.Organization;
  }
  if (output.OrganizationalUnit !== undefined) {
    contents.OrganizationalUnit = output.OrganizationalUnit;
  }
  if (output.Pseudonym !== undefined) {
    contents.Pseudonym = output.Pseudonym;
  }
  if (output.SerialNumber !== undefined) {
    contents.SerialNumber = output.SerialNumber;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.Surname !== undefined) {
    contents.Surname = output.Surname;
  }
  if (output.Title !== undefined) {
    contents.Title = output.Title;
  }
  return contents;
};

const deserializeAws_json1_1ActionList = (
  output: any,
  context: __SerdeContext
): Array<ActionType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CertificateAuthorities = (
  output: any,
  context: __SerdeContext
): Array<CertificateAuthority> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CertificateAuthority(entry, context)
  );
};

const deserializeAws_json1_1CertificateAuthority = (
  output: any,
  context: __SerdeContext
): CertificateAuthority => {
  let contents: any = {
    __type: "CertificateAuthority",
    Arn: undefined,
    CertificateAuthorityConfiguration: undefined,
    CreatedAt: undefined,
    FailureReason: undefined,
    LastStateChangeAt: undefined,
    NotAfter: undefined,
    NotBefore: undefined,
    RestorableUntil: undefined,
    RevocationConfiguration: undefined,
    Serial: undefined,
    Status: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CertificateAuthorityConfiguration !== undefined) {
    contents.CertificateAuthorityConfiguration = deserializeAws_json1_1CertificateAuthorityConfiguration(
      output.CertificateAuthorityConfiguration,
      context
    );
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LastStateChangeAt !== undefined) {
    contents.LastStateChangeAt = new Date(
      output.LastStateChangeAt % 1 != 0
        ? Math.round(output.LastStateChangeAt * 1000)
        : output.LastStateChangeAt
    );
  }
  if (output.NotAfter !== undefined) {
    contents.NotAfter = new Date(
      output.NotAfter % 1 != 0
        ? Math.round(output.NotAfter * 1000)
        : output.NotAfter
    );
  }
  if (output.NotBefore !== undefined) {
    contents.NotBefore = new Date(
      output.NotBefore % 1 != 0
        ? Math.round(output.NotBefore * 1000)
        : output.NotBefore
    );
  }
  if (output.RestorableUntil !== undefined) {
    contents.RestorableUntil = new Date(
      output.RestorableUntil % 1 != 0
        ? Math.round(output.RestorableUntil * 1000)
        : output.RestorableUntil
    );
  }
  if (output.RevocationConfiguration !== undefined) {
    contents.RevocationConfiguration = deserializeAws_json1_1RevocationConfiguration(
      output.RevocationConfiguration,
      context
    );
  }
  if (output.Serial !== undefined) {
    contents.Serial = output.Serial;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1CertificateAuthorityConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateAuthorityConfiguration => {
  let contents: any = {
    __type: "CertificateAuthorityConfiguration",
    KeyAlgorithm: undefined,
    SigningAlgorithm: undefined,
    Subject: undefined
  };
  if (output.KeyAlgorithm !== undefined) {
    contents.KeyAlgorithm = output.KeyAlgorithm;
  }
  if (output.SigningAlgorithm !== undefined) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  if (output.Subject !== undefined) {
    contents.Subject = deserializeAws_json1_1ASN1Subject(
      output.Subject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CertificateMismatchException = (
  output: any,
  context: __SerdeContext
): CertificateMismatchException => {
  let contents: any = {
    __type: "CertificateMismatchException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityAuditReportResponse => {
  let contents: any = {
    __type: "CreateCertificateAuthorityAuditReportResponse",
    AuditReportId: undefined,
    S3Key: undefined
  };
  if (output.AuditReportId !== undefined) {
    contents.AuditReportId = output.AuditReportId;
  }
  if (output.S3Key !== undefined) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1CreateCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityResponse => {
  let contents: any = {
    __type: "CreateCertificateAuthorityResponse",
    CertificateAuthorityArn: undefined
  };
  if (output.CertificateAuthorityArn !== undefined) {
    contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
  }
  return contents;
};

const deserializeAws_json1_1CrlConfiguration = (
  output: any,
  context: __SerdeContext
): CrlConfiguration => {
  let contents: any = {
    __type: "CrlConfiguration",
    CustomCname: undefined,
    Enabled: undefined,
    ExpirationInDays: undefined,
    S3BucketName: undefined
  };
  if (output.CustomCname !== undefined) {
    contents.CustomCname = output.CustomCname;
  }
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  if (output.ExpirationInDays !== undefined) {
    contents.ExpirationInDays = output.ExpirationInDays;
  }
  if (output.S3BucketName !== undefined) {
    contents.S3BucketName = output.S3BucketName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityAuditReportResponse => {
  let contents: any = {
    __type: "DescribeCertificateAuthorityAuditReportResponse",
    AuditReportStatus: undefined,
    CreatedAt: undefined,
    S3BucketName: undefined,
    S3Key: undefined
  };
  if (output.AuditReportStatus !== undefined) {
    contents.AuditReportStatus = output.AuditReportStatus;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.S3BucketName !== undefined) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3Key !== undefined) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  let contents: any = {
    __type: "DescribeCertificateAuthorityResponse",
    CertificateAuthority: undefined
  };
  if (output.CertificateAuthority !== undefined) {
    contents.CertificateAuthority = deserializeAws_json1_1CertificateAuthority(
      output.CertificateAuthority,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCertificateResponse => {
  let contents: any = {
    __type: "GetCertificateAuthorityCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = output.Certificate;
  }
  if (output.CertificateChain !== undefined) {
    contents.CertificateChain = output.CertificateChain;
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCsrResponse => {
  let contents: any = {
    __type: "GetCertificateAuthorityCsrResponse",
    Csr: undefined
  };
  if (output.Csr !== undefined) {
    contents.Csr = output.Csr;
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateResponse => {
  let contents: any = {
    __type: "GetCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = output.Certificate;
  }
  if (output.CertificateChain !== undefined) {
    contents.CertificateChain = output.CertificateChain;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  let contents: any = {
    __type: "InvalidArgsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPolicyException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyException => {
  let contents: any = {
    __type: "InvalidPolicyException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  let contents: any = {
    __type: "InvalidStateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IssueCertificateResponse = (
  output: any,
  context: __SerdeContext
): IssueCertificateResponse => {
  let contents: any = {
    __type: "IssueCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined) {
    contents.CertificateArn = output.CertificateArn;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  let contents: any = {
    __type: "ListCertificateAuthoritiesResponse",
    CertificateAuthorities: undefined,
    NextToken: undefined
  };
  if (output.CertificateAuthorities !== undefined) {
    contents.CertificateAuthorities = deserializeAws_json1_1CertificateAuthorities(
      output.CertificateAuthorities,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  let contents: any = {
    __type: "ListPermissionsResponse",
    NextToken: undefined,
    Permissions: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Permissions !== undefined) {
    contents.Permissions = deserializeAws_json1_1PermissionList(
      output.Permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  let contents: any = {
    __type: "ListTagsResponse",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1MalformedCSRException = (
  output: any,
  context: __SerdeContext
): MalformedCSRException => {
  let contents: any = {
    __type: "MalformedCSRException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1MalformedCertificateException = (
  output: any,
  context: __SerdeContext
): MalformedCertificateException => {
  let contents: any = {
    __type: "MalformedCertificateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  let contents: any = {
    __type: "Permission",
    Actions: undefined,
    CertificateAuthorityArn: undefined,
    CreatedAt: undefined,
    Policy: undefined,
    Principal: undefined,
    SourceAccount: undefined
  };
  if (output.Actions !== undefined) {
    contents.Actions = deserializeAws_json1_1ActionList(
      output.Actions,
      context
    );
  }
  if (output.CertificateAuthorityArn !== undefined) {
    contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.Policy !== undefined) {
    contents.Policy = output.Policy;
  }
  if (output.Principal !== undefined) {
    contents.Principal = output.Principal;
  }
  if (output.SourceAccount !== undefined) {
    contents.SourceAccount = output.SourceAccount;
  }
  return contents;
};

const deserializeAws_json1_1PermissionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PermissionAlreadyExistsException => {
  let contents: any = {
    __type: "PermissionAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PermissionList = (
  output: any,
  context: __SerdeContext
): Array<Permission> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Permission(entry, context)
  );
};

const deserializeAws_json1_1RequestAlreadyProcessedException = (
  output: any,
  context: __SerdeContext
): RequestAlreadyProcessedException => {
  let contents: any = {
    __type: "RequestAlreadyProcessedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RequestFailedException = (
  output: any,
  context: __SerdeContext
): RequestFailedException => {
  let contents: any = {
    __type: "RequestFailedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RequestInProgressException = (
  output: any,
  context: __SerdeContext
): RequestInProgressException => {
  let contents: any = {
    __type: "RequestInProgressException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RevocationConfiguration = (
  output: any,
  context: __SerdeContext
): RevocationConfiguration => {
  let contents: any = {
    __type: "RevocationConfiguration",
    CrlConfiguration: undefined
  };
  if (output.CrlConfiguration !== undefined) {
    contents.CrlConfiguration = deserializeAws_json1_1CrlConfiguration(
      output.CrlConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
