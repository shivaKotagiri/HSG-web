-- CreateTable
CREATE TABLE "BloodDonation" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "studentId" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "lastDonationAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodDonation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BloodDonation_bloodGroup_idx" ON "BloodDonation"("bloodGroup");

-- CreateIndex
CREATE INDEX "BloodDonation_studentId_idx" ON "BloodDonation"("studentId");

-- CreateIndex
CREATE INDEX "BloodDonation_phoneNumber_idx" ON "BloodDonation"("phoneNumber");
