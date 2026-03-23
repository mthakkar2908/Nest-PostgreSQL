-- CreateEnum
CREATE TYPE "AppointmentType" AS ENUM ('FACE_TO_FACE', 'TELEPHONE', 'VIDEO');

-- CreateEnum
CREATE TYPE "UrgencyWindow" AS ENUM ('SAME_DAY', 'NEXT_DAY', 'ROUTINE');

-- CreateEnum
CREATE TYPE "ClinicianGrade" AS ENUM ('GP', 'ANP', 'PHARMACIST', 'MH_PRACTITIONER', 'NURSE', 'ADMIN');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'RESCHEDULED', 'FAILED', 'FALLBACK', 'AWAITING_HUMAN_REVIEW');

-- CreateEnum
CREATE TYPE "EscalationChannel" AS ENUM ('CALL_999', 'ATTEND_AE', 'CALL_111', 'DUTY_CLINICIAN');

-- CreateEnum
CREATE TYPE "PharmacyFirstStatus" AS ENUM ('ELIGIBLE', 'INELIGIBLE', 'OFFERED', 'ACCEPTED', 'DECLINED', 'REFERRED', 'FALLBACK_TO_GP', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "PharmacyFirstCondition" AS ENUM ('ACUTE_OTITIS_MEDIA', 'IMPETIGO', 'INFECTED_INSECT_BITES', 'SHINGLES', 'SINUSITIS', 'SORE_THROAT', 'UNCOMPLICATED_UTI');

-- CreateEnum
CREATE TYPE "CommunicationChannel" AS ENUM ('SMS', 'EMAIL');

-- CreateEnum
CREATE TYPE "CommunicationStatus" AS ENUM ('PENDING', 'SENT', 'DELIVERED', 'FAILED');

-- CreateEnum
CREATE TYPE "CommunicationPurpose" AS ENUM ('BOOKING_CONFIRMATION', 'REMINDER_48H', 'REMINDER_24H', 'REMINDER_2H', 'CANCELLATION_CONFIRMATION', 'RESCHEDULE_CONFIRMATION', 'PHARMACY_CONFIRMATION', 'PHARMACY_REMINDER', 'RED_FLAG_ESCALATION', 'SAFETY_NET');

-- CreateEnum
CREATE TYPE "TriageStatus" AS ENUM ('STARTED', 'COMPLETED', 'ABANDONED', 'ESCALATED');

-- CreateEnum
CREATE TYPE "SeverityBand" AS ENUM ('MILD', 'MODERATE', 'SEVERE');

-- CreateEnum
CREATE TYPE "IntakeMode" AS ENUM ('NEW_CONDITION', 'ONGOING_CONDITION');

-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('PRACTICE_ADMIN', 'CLINICAL_GOVERNANCE_LEAD', 'OPERATIONS_MANAGER', 'READ_ONLY_AUDITOR', 'PCN_ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "GpSystem" AS ENUM ('EMIS_WEB', 'TPP_SYSTMONE');

-- CreateEnum
CREATE TYPE "IM1TransactionStatus" AS ENUM ('SUCCESS', 'FAILED', 'RETRYING', 'QUEUED');

-- CreateEnum
CREATE TYPE "FallbackReason" AS ENUM ('NO_SLOTS_AVAILABLE', 'EXCLUSION_CRITERIA', 'PATIENT_DECLINED', 'CAPACITY_EXCEEDED', 'INTEGRATION_UNAVAILABLE', 'RULE_MISMATCH');

-- CreateEnum
CREATE TYPE "ConsentType" AS ENUM ('DATA_PROCESSING', 'AI_ASSISTANCE', 'PHARMACY_FIRST_DATA_SHARING', 'COMMUNICATIONS');

-- CreateEnum
CREATE TYPE "RedFlagTrigger" AS ENUM ('SEVERE_CHEST_PAIN', 'SUDDEN_SHORTNESS_OF_BREATH', 'STROKE_SYMPTOMS', 'HEAVY_UNCONTROLLED_BLEEDING', 'LOSS_OF_CONSCIOUSNESS', 'SUDDEN_SEVERE_HEADACHE', 'VOMITING_BLOOD_BLACK_STOOLS', 'SEVERE_ABDOMINAL_PAIN_FEVER', 'SEVERE_ALLERGIC_REACTION', 'SUDDEN_VISION_LOSS', 'SEVERE_MENTAL_HEALTH_CRISIS', 'SUICIDAL_INTENT', 'CUSTOM');

-- CreateEnum
CREATE TYPE "ConditionCategory" AS ENUM ('SORE_THROAT_COUGH_FLU', 'UTI_CYSTITIS', 'WOMENS_HEALTH', 'SKIN_CONDITIONS', 'RED_EYE_CONJUNCTIVITIS', 'MENTAL_HEALTH', 'JOINT_MUSCLE_PAIN', 'PHARMACY_FIRST', 'ONGOING_CONDITION', 'OTHER');

-- CreateEnum
CREATE TYPE "WriteBackStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "PartnerBookingModel" AS ENUM ('API', 'SLOT_FEED', 'PORTAL_DISPATCH');

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "odsCode" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "postcode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "aiSummarisationEnabled" BOOLEAN NOT NULL DEFAULT true,
    "humanReviewRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "siteCode" TEXT NOT NULL,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "postcode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "AdminRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientSession" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "dobHash" TEXT NOT NULL,
    "postcodeHash" TEXT NOT NULL,
    "ageRangeBand" TEXT,
    "otpVerified" BOOLEAN NOT NULL DEFAULT false,
    "otpVerifiedAt" TIMESTAMP(3),
    "identityMode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PatientSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsentRecord" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "consentType" "ConsentType" NOT NULL,
    "granted" BOOLEAN NOT NULL,
    "consentText" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ConsentRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedFlagConfig" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "trigger" "RedFlagTrigger" NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RedFlagConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedFlagEvent" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "sessionId" TEXT,
    "triggeredFlags" "RedFlagTrigger"[],
    "redFlagConfigId" TEXT,
    "escalationChannel" "EscalationChannel" NOT NULL,
    "escalationShownAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookingTerminated" BOOLEAN NOT NULL DEFAULT true,
    "staffReviewRequested" BOOLEAN NOT NULL DEFAULT false,
    "channel" TEXT NOT NULL DEFAULT 'WEB',

    CONSTRAINT "RedFlagEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriageSession" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "status" "TriageStatus" NOT NULL,
    "intakeMode" "IntakeMode",
    "conditionCategory" "ConditionCategory",
    "severityBand" "SeverityBand",
    "onsetDuration" TEXT,
    "selfCareTried" BOOLEAN,
    "lastClinicianSeen" TEXT,
    "isFlareUp" BOOLEAN,
    "preferredClinicianId" TEXT,
    "preferredSiteId" TEXT,
    "pharmacyFirstCandidate" BOOLEAN NOT NULL DEFAULT false,
    "pharmacyFirstStatus" "PharmacyFirstStatus",
    "redFlagScreeningPassed" BOOLEAN NOT NULL DEFAULT false,
    "aiSummaryGenerated" BOOLEAN NOT NULL DEFAULT false,
    "aiSummaryText" TEXT,
    "structuredNoteText" TEXT,
    "pathwayKey" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "abandonedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TriageSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConditionPathway" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "category" "ConditionCategory" NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,
    "configJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConditionPathway_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntakeQuestion" (
    "id" TEXT NOT NULL,
    "pathwayId" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "answerType" TEXT NOT NULL,
    "options" JSONB,
    "validationRules" JSONB,
    "redFlagMappings" JSONB,
    "bookingRuleKey" TEXT,
    "pharmacyFirstEligibilityMapping" JSONB,
    "orderIndex" INTEGER NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntakeQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntakeAnswer" (
    "id" TEXT NOT NULL,
    "triageSessionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "answerValue" TEXT,
    "freeTextProvided" BOOLEAN NOT NULL DEFAULT false,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IntakeAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotoUpload" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "triageSessionId" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,
    "s3Bucket" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "fileSizeBytes" INTEGER NOT NULL,
    "virusScanPassed" BOOLEAN NOT NULL DEFAULT false,
    "retentionPolicy" TEXT,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotoUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinician" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "siteId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "grade" "ClinicianGrade" NOT NULL,
    "im1ClinicianCode" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clinician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingRule" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "siteId" TEXT,
    "conditionCategoryKey" TEXT NOT NULL,
    "severityBand" "SeverityBand",
    "urgencyWindow" "UrgencyWindow" NOT NULL,
    "preferredClinicianGrade" "ClinicianGrade" NOT NULL,
    "clinicianId" TEXT,
    "appointmentType" "AppointmentType" NOT NULL,
    "bookingWindowDaysMin" INTEGER NOT NULL DEFAULT 0,
    "bookingWindowDaysMax" INTEGER NOT NULL DEFAULT 14,
    "maxDailyCapacity" INTEGER,
    "exclusionCriteria" JSONB,
    "fallbackRules" JSONB,
    "humanValidationRequired" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingRuleVersion" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "snapshotJson" JSONB NOT NULL,
    "changedBy" TEXT NOT NULL,
    "changeNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookingRuleVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "siteId" TEXT,
    "triageSessionId" TEXT,
    "clinicianId" TEXT,
    "bookingRuleId" TEXT,
    "im1BookingId" TEXT,
    "gpSystem" "GpSystem",
    "status" "BookingStatus" NOT NULL,
    "appointmentType" "AppointmentType" NOT NULL,
    "urgencyWindow" "UrgencyWindow" NOT NULL,
    "scheduledAt" TIMESTAMP(3),
    "bookedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "cancellationReason" TEXT,
    "rescheduledFromId" TEXT,
    "fallbackReason" "FallbackReason",
    "humanReviewRequired" BOOLEAN NOT NULL DEFAULT false,
    "humanReviewedAt" TIMESTAMP(3),
    "humanReviewedBy" TEXT,
    "confirmationSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmacyFirstConfig" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "condition" "PharmacyFirstCondition" NOT NULL,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "ageMin" INTEGER,
    "ageMax" INTEGER,
    "exclusionRules" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PharmacyFirstConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmacyPartner" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT,
    "bookingModel" "PartnerBookingModel" NOT NULL,
    "apiEndpoint" TEXT,
    "apiKeyRef" TEXT,
    "coveragePostcodes" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "annualFeeStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PharmacyPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmacyReferral" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "triageSessionId" TEXT NOT NULL,
    "pharmacyPartnerId" TEXT NOT NULL,
    "condition" "PharmacyFirstCondition" NOT NULL,
    "status" "PharmacyFirstStatus" NOT NULL,
    "consentToken" TEXT NOT NULL,
    "referralPayloadJson" JSONB NOT NULL,
    "partnerBookingRef" TEXT,
    "scheduledAt" TIMESTAMP(3),
    "fallbackReason" "FallbackReason",
    "fallbackToGpAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PharmacyReferral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IM1Credential" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "gpSystem" "GpSystem" NOT NULL,
    "im1Provider" TEXT NOT NULL DEFAULT 'BLACK_PEAR',
    "secretRef" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IM1Credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IM1Transaction" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "appointmentId" TEXT,
    "transactionType" TEXT NOT NULL,
    "status" "IM1TransactionStatus" NOT NULL,
    "requestPayload" JSONB,
    "responsePayload" JSONB,
    "im1BookingId" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "executedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IM1Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WriteBackLog" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "triageSessionId" TEXT NOT NULL,
    "gpSystem" "GpSystem" NOT NULL,
    "status" "WriteBackStatus" NOT NULL,
    "writeBackTemplateVersion" TEXT,
    "presentingComplaint" TEXT,
    "symptomChecklist" JSONB,
    "durationBand" TEXT,
    "severityBand" "SeverityBand",
    "redFlagResult" BOOLEAN,
    "pharmacyFirstOffered" BOOLEAN,
    "pharmacyFirstAccepted" BOOLEAN,
    "bookingOutcome" TEXT,
    "safetyNetDelivered" BOOLEAN,
    "consentConfirmed" BOOLEAN,
    "sourceTag" TEXT NOT NULL DEFAULT 'Toni Assist Auto-Agent',
    "errorMessage" TEXT,
    "writtenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WriteBackLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunicationTemplate" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "purpose" "CommunicationPurpose" NOT NULL,
    "channel" "CommunicationChannel" NOT NULL,
    "templateBody" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunicationTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReminderConfig" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "reminder48hEnabled" BOOLEAN NOT NULL DEFAULT true,
    "reminder24hEnabled" BOOLEAN NOT NULL DEFAULT true,
    "reminder2hEnabled" BOOLEAN NOT NULL DEFAULT false,
    "cancellationCutoffHours" INTEGER NOT NULL DEFAULT 2,
    "rescheduleEnabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReminderConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communication" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "appointmentId" TEXT,
    "pharmacyReferralId" TEXT,
    "templateId" TEXT,
    "channel" "CommunicationChannel" NOT NULL,
    "purpose" "CommunicationPurpose" NOT NULL,
    "status" "CommunicationStatus" NOT NULL,
    "bookingReference" TEXT,
    "awsMessageId" TEXT,
    "scheduledAt" TIMESTAMP(3),
    "sentAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Communication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIProcessingLog" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "triageSessionId" TEXT NOT NULL,
    "anonymisedInput" TEXT NOT NULL,
    "structuredOutput" JSONB,
    "confidenceValid" BOOLEAN,
    "fallbackTriggered" BOOLEAN NOT NULL DEFAULT false,
    "openAiModel" TEXT,
    "processingMs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AIProcessingLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "sessionRef" TEXT,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "adminUserId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT,
    "entityId" TEXT,
    "beforeJson" JSONB,
    "afterJson" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantConfigChange" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "adminUserId" TEXT NOT NULL,
    "configArea" TEXT NOT NULL,
    "changeNote" TEXT,
    "version" INTEGER NOT NULL,
    "snapshotJson" JSONB NOT NULL,
    "isRolledBack" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantConfigChange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_odsCode_key" ON "Tenant"("odsCode");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PatientSession_sessionToken_key" ON "PatientSession"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "TriageSession_sessionId_key" ON "TriageSession"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_triageSessionId_key" ON "Appointment"("triageSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_im1BookingId_key" ON "Appointment"("im1BookingId");

-- CreateIndex
CREATE UNIQUE INDEX "PharmacyReferral_triageSessionId_key" ON "PharmacyReferral"("triageSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "IM1Credential_tenantId_key" ON "IM1Credential"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "WriteBackLog_triageSessionId_key" ON "WriteBackLog"("triageSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "ReminderConfig_tenantId_key" ON "ReminderConfig"("tenantId");

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminUser" ADD CONSTRAINT "AdminUser_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsentRecord" ADD CONSTRAINT "ConsentRecord_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsentRecord" ADD CONSTRAINT "ConsentRecord_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "PatientSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedFlagConfig" ADD CONSTRAINT "RedFlagConfig_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedFlagEvent" ADD CONSTRAINT "RedFlagEvent_redFlagConfigId_fkey" FOREIGN KEY ("redFlagConfigId") REFERENCES "RedFlagConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriageSession" ADD CONSTRAINT "TriageSession_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriageSession" ADD CONSTRAINT "TriageSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "PatientSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionPathway" ADD CONSTRAINT "ConditionPathway_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntakeQuestion" ADD CONSTRAINT "IntakeQuestion_pathwayId_fkey" FOREIGN KEY ("pathwayId") REFERENCES "ConditionPathway"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntakeAnswer" ADD CONSTRAINT "IntakeAnswer_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntakeAnswer" ADD CONSTRAINT "IntakeAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "IntakeQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoUpload" ADD CONSTRAINT "PhotoUpload_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoUpload" ADD CONSTRAINT "PhotoUpload_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinician" ADD CONSTRAINT "Clinician_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinician" ADD CONSTRAINT "Clinician_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRule" ADD CONSTRAINT "BookingRule_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRule" ADD CONSTRAINT "BookingRule_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRule" ADD CONSTRAINT "BookingRule_clinicianId_fkey" FOREIGN KEY ("clinicianId") REFERENCES "Clinician"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRuleVersion" ADD CONSTRAINT "BookingRuleVersion_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingRuleVersion" ADD CONSTRAINT "BookingRuleVersion_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "BookingRule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_clinicianId_fkey" FOREIGN KEY ("clinicianId") REFERENCES "Clinician"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_bookingRuleId_fkey" FOREIGN KEY ("bookingRuleId") REFERENCES "BookingRule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyFirstConfig" ADD CONSTRAINT "PharmacyFirstConfig_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyPartner" ADD CONSTRAINT "PharmacyPartner_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyReferral" ADD CONSTRAINT "PharmacyReferral_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyReferral" ADD CONSTRAINT "PharmacyReferral_pharmacyPartnerId_fkey" FOREIGN KEY ("pharmacyPartnerId") REFERENCES "PharmacyPartner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IM1Credential" ADD CONSTRAINT "IM1Credential_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IM1Transaction" ADD CONSTRAINT "IM1Transaction_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WriteBackLog" ADD CONSTRAINT "WriteBackLog_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WriteBackLog" ADD CONSTRAINT "WriteBackLog_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunicationTemplate" ADD CONSTRAINT "CommunicationTemplate_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReminderConfig" ADD CONSTRAINT "ReminderConfig_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_pharmacyReferralId_fkey" FOREIGN KEY ("pharmacyReferralId") REFERENCES "PharmacyReferral"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "CommunicationTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIProcessingLog" ADD CONSTRAINT "AIProcessingLog_triageSessionId_fkey" FOREIGN KEY ("triageSessionId") REFERENCES "TriageSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalyticsEvent" ADD CONSTRAINT "AnalyticsEvent_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_adminUserId_fkey" FOREIGN KEY ("adminUserId") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantConfigChange" ADD CONSTRAINT "TenantConfigChange_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantConfigChange" ADD CONSTRAINT "TenantConfigChange_adminUserId_fkey" FOREIGN KEY ("adminUserId") REFERENCES "AdminUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
