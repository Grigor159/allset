"use client";

import {
    PutObjectCommand,
    DeleteObjectCommand,
    // DeleteObjectsCommand,
    // ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { s3Client, region, bucket } from "@/lib/aws";

export const InvitationStorageService = {
    async upload(file, invitationId) {
        if (!file) throw new Error("File is required");
        if (!invitationId) throw new Error("Invitation ID is required");

        const key = `invitations/${invitationId}/${Date.now()}-${file.name}`;

        await s3Client.send(
            new PutObjectCommand({
                Bucket: bucket,
                Key: key,
                Body: file,
                ContentType: file.type,
            })
        );

        return {
            key,
            url: `https://${bucket}.s3.${region}.amazonaws.com/${key}`,
        };
    },

    async deleteImage(key) {
        if (!key) return;
        await s3Client.send(
            new DeleteObjectCommand({
                Bucket: bucket,
                Key: key,
            })
        );
    },

    // TODO Images with folder should be deleted after the invitation expires using a cron job.
    // async deleteInvitationFolder(invitationId) {
    //     if (!invitationId) return;

    //     const prefix = `invitations/${invitationId}/`;

    //     const listed = await s3Client.send(
    //         new ListObjectsV2Command({
    //             Bucket: bucket,
    //             Prefix: prefix,
    //         })
    //     );

    //     if (!listed.Contents || !listed.Contents.length) return;

    //     await s3Client.send(
    //         new DeleteObjectsCommand({
    //             Bucket: bucket,
    //             Delete: {
    //                 Objects: listed.Contents.map(obj => ({ Key: obj.Key })),
    //             },
    //         })
    //     );
    // },
};